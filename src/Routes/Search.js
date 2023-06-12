import React, { useState, useEffect, useRef } from "react";
import "./Style.css";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { LoadScriptNext, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import Navbar from "../Components/Navbar";

const Search = (props) => {
  //
  const [apiKey, setApiKey] = useState("AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg");
  const [isLoading, setIsLoading] = useState(true);

  const [DirectionsResponse, setDirectionsResponse] = useState(null);
  const [Distance, setDistance] = useState("");
  const [Duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    // eslint-disable-next-line
    const directionsService = new google.maps.DirectionsService();

    const result = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line
      travelMode: google.maps.TravelMode.TRANSIT,
    });

    setDirectionsResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
  }

  useEffect(() => {
    setTimeout(() => {
      // const fetchedApiKey = apiKey;
      // setApiKey(fetchedApiKey);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container1">
        <div className="innerContainer">
          <Autocomplete>
            <input type="text" className="textbox" id="textbox" placeholder="Origin" ref={originRef} />
          </Autocomplete>

          <Autocomplete>
            <input type="text" className="textbox1" id="textbox1" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>

          <button className="button" onClick={calculateRoute}>
            Calculate Route
          </button>
        </div>
        <div className="map-container">
          {!isLoading && DirectionsResponse && (
            <div className="transport-data">
              <p className="main-heading">
                {" "}
                Transport Method : <b> Local Transport </b>{" "}
              </p>
              <p className="estimated-fare">
                {" "}
                Estimated Fare : <b> {DirectionsResponse?.routes[0]?.fare.text} </b>
              </p>
              <p className="estimated-fare">
                {" "}
                Distance: <b> {Distance} </b>
              </p>
              <p className="estimated-fare">
                {" "}
                Duration: <b> {Duration} </b>
              </p>
              <br /> <p className="available-routes">Available Routes</p> <br />
              <div className="methods-mapper">
                {DirectionsResponse?.routes[0]?.legs?.length > 0 &&
                  DirectionsResponse?.routes[0]?.legs[0].steps?.length > 0 &&
                  DirectionsResponse?.routes[0]?.legs[0].steps.map((route, index) => (
                    <div>
                      <p>
                        {" "}
                        Step: {index + 1} {index + 1 === 1 && <b>Departure</b>}
                        {index + 1 === DirectionsResponse?.routes[0]?.legs[0].steps.length && <b>Arrival</b>}
                      </p>
                      <ol style={{ listStyle: "disc" }}>
                        <li>
                          {" "}
                          <b>Instruction / vehicle location:</b>
                          <span> {route.instructions} </span>{" "}
                        </li>
                        <li>
                          {" "}
                          <b>Estimation duration:</b> {route.duration.text}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>{route.travel_mode === "TRANSIT" ? "Traveling" : "Walking"} distance:</b> {route.distance.text}{" "}
                        </li>
                        <li>
                          {" "}
                          <b>Medium:</b> {route.travel_mode === "TRANSIT" ? <span> By vehicle &#128653;</span> : <span> By Walk &#128099;</span>}
                        </li>
                      </ol>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {isLoading ? (
            <div>Loading Maps...</div>
          ) : (
            <LoadScriptNext googleMapsApiKey={apiKey}>
              <Map google={props.google} mapContainerStyle={{ height: "50%" }} zoom={14}>
                {DirectionsResponse && <DirectionsRenderer directions={DirectionsResponse} />}
              </Map>
            </LoadScriptNext>
          )}
        </div>
      </div>
    </>
  );
};

//export default Wrong;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDtT2Wl3LOuxKkLwbqbkP9tQScwyH_RShg",
})(Search);
