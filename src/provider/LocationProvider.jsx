import { useState } from "react";
import { LocationContext } from "../contexts";

// eslint-disable-next-line react/prop-types
const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
