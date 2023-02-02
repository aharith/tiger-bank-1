import { getGeocode, getLatLng } from "use-places-autocomplete";

const fetchMapLocation = (address) => {
  return async (dispatch) => {
    try {
      const results = await getGeocode({ address: address.description });
      const { lat, lng } = await getLatLng(results[0]);
      dispatch(updateMapLocation({ lat, lng }));
    } catch (error) {
      console.log("geocode error");
    }
  };
};

const updateMapLocation = (data) => {
  return {
    type: "UPDATE_MAP",
    data,
  };
};

export { fetchMapLocation };
