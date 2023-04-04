import { useState } from "react";
const useLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [loading, setLoading] = useState(false);
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latitude},${longitude}`);
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
      // status.textContent = "Loading";
      navigator.geolocation.getCurrentPosition(success, error);
      // setLoading(false);
    }
    // setLoading(false)
  };
  return { latLong, locationErrorMsg, handleTrackLocation, loading };
};

export default useLocation;
