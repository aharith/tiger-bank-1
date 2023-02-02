import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import "./style.css";

function Map() {
  const center = useSelector((state) => state.maps.location);
  const kl = {
    lat: 3.1569486,
    lng: 101.712303,
  };

  return (
      <GoogleMap
        zoom={11}
        center={center || kl}
        mapContainerClassName="map-container"
      >
        <MarkerF position={center || kl} />
      </GoogleMap>
  );
}

export default Map;
