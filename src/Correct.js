import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function Correct(props)
{
  return(

    <div>

      <Map  
      google={props.google} zoom={14}>
        
        <Marker onClick={props.onMarkerClick}
        name={'Current location'} />
        
        </Map>



    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg")
})(Correct)
