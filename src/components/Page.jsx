import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../contexts";
import Header from "./Header/Header";
import WeatherBoard from "./Weather/WeatherBoard";

import ClearSkyImage from "/assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "/assets/backgrounds/few-clouds.jpg";
import MistImage from "/assets/backgrounds/mist.jpeg";
import RainyDayImage from "/assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "/assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "/assets/backgrounds/sunny.jpg";
import ThunderStormImage from "/assets/backgrounds/thunderstorm.jpg";
import WinterImage from "/assets/backgrounds/winter.jpg";

const Page = () => {
  const { weatherData } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <div
      style={{
        backgroundImage: `url('${climateImage}')`,
      }}
      className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center"
    >
      <Header />
      <WeatherBoard />
    </div>
  );
};

export default Page;
