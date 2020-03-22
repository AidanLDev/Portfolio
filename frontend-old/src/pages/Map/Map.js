import React, { useEffect } from "react";
import styles from "./style.scss";

const Map = props => {
  const searchInput = "search_input";
  const options = {
    zoom: 8,
    center: { lat: 51.752, lng: 1.2577 },
    mapTypeControlOptions: {
      position: window.google.maps.ControlPosition.LEFT_CENTER
    }
  };

  useEffect(() => {
    //  Render the map
    const mapAPI = window.google.maps;
    new mapAPI.Map(document.getElementById("map"), options);
    new window.google.maps.places.Autocomplete(
      document.getElementById(searchInput),
      {
        types: ["geocode"]
      }
    );
    //  Search/autocomplete
  });

  // console.log(mapAPI);
  return (
    <div className={styles.mapWrapper}>
      <div className={styles.formGroup}>
        <label>Search</label>
        <input type="text" id={searchInput} />
      </div>
      <div id="map" className={styles.mapContainer}></div>
    </div>
  );
};

export default Map;
