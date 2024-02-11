/* eslint-disable react/prop-types */

// import { WeatherContext } from "../contexts";
import { WeatherContext } from "../contexts";
import { useWeather } from "../hooks";
// import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, isError } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, isError }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
