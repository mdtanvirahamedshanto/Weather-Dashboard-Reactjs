import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

const WeatherCondition = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The Climate is <u className="text-green-400">{weatherData.climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(weatherData.maxTemperature)}°</p>
            <img src="./assets/icons/temp-max.svg" alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(weatherData.minTemperature)}°</p>
            <img src="./assets/icons/temp-min.svg" alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.humidity}%</p>
            <img src="./assets/icons/humidity.svg" alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.cloudPercentage}%</p>
            <img src="./assets/icons/cloud.svg" alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{weatherData.wind}km/h</p>
            <img src="./assets/icons/wind.svg" alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherCondition;
