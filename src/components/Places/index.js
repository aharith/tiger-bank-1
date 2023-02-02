import { Paper } from "@mui/material";
import { useLoadScript } from "@react-google-maps/api";
import HistoryList from "../HistoryList";
import Map from "../Map";
import SearchInput from "../SearchInput";
import "./style.css";

function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Map />
      <Paper elevation={8} className="input-container">
        <SearchInput />
      </Paper>
      <HistoryList />
    </>
  );
}

export default Places;
