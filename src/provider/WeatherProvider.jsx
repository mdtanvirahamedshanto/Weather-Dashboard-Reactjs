/* eslint-disable react/prop-types */

import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, isError } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, isError }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
