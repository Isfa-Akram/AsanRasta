import React, {useState,useEffect, useRef} from 'react';
import './Style.css';
import { Map, GoogleApiWrapper} from 'google-maps-react';
import {LoadScriptNext, Autocomplete, DirectionsRenderer} from '@react-google-maps/api';


    const MapFields = (props) => {
    const [apiKey, setApiKey] = useState('AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg');
    const [isLoading, setIsLoading] = useState(true);

    const [DirectionsResponse,setDirectionsResponse] = useState(null);
    const [Distance, setDistance] = useState('');
    const [Duration,setDuration] = useState('');

    const originRef = useRef();
    const destinationRef = useRef();


  
    async function calculateRoute ()
    {
        if(originRef.current.value === '' || destinationRef.current.value === '')
        {
            return
        }

        // eslint-disable-next-line
        const directionsService = new google.maps.DirectionsService();

        const result = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
        // eslint-disable-next-line
            travelMode: google.maps.TravelMode.TRANSIT

        })

        setDirectionsResponse(result)
        setDistance(result.routes[0].legs[0].distance.text)
        setDuration(result.routes[0].legs[0].duration.text)

    }
  
    useEffect(() => {
      
      setTimeout(() => {
        // const fetchedApiKey = apiKey;
        // setApiKey(fetchedApiKey);
        setIsLoading(false);
      }, 2000);
    }, []);


  return(
    
<div className="container1"> 

        <div className="innerContainer">

            <Autocomplete>
            <input type="text" className="textbox" id="textbox" placeholder="Origin" ref={originRef}/>
            </Autocomplete>

            <Autocomplete> 
            <input type="text" className="textbox1" id="textbox1" placeholder="Destination" ref={destinationRef}/>
            </Autocomplete>

            <button className="button" onClick={calculateRoute}>Calculate Route</button>
            
        </div>

            <p className="inline-text"><em><b>Distance: {Distance}</b></em></p>
            <p className="inline-text"><em><b>Duration: {Duration}</b></em></p>

        
        {isLoading ? (<div>Loading Maps...</div>) : (
        <LoadScriptNext googleMapsApiKey={apiKey}>
          <Map
            google={props.google}
            mapContainerStyle={{ height: '50%' }}
            zoom={14}>

            {DirectionsResponse && <DirectionsRenderer directions={DirectionsResponse}/>}
            
            </Map>
          
        </LoadScriptNext>
        )}
      
</div>
        
);}

//export default Wrong;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg")
  })(MapFields)
