import { useContext, useState } from "react";
import { ACTION_TYPES, storeContext } from "@/stores/stores";

const useLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const { dispatch } = useContext(storeContext);
  // const [latLong, setLatLong] = useState("");
  const [loading, setLoading] = useState(false);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // setLatLong(`${latitude},${longitude}`);
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });
    setLocationErrorMsg("");
    setLoading(false);
  };
  const error = () => {
    setLoading(false);
    setLocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    // setLoading(false)
  };
  return { locationErrorMsg, handleTrackLocation, loading };
};

export default useLocation;
