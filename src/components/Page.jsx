import Header from "./Header";
import WeatherBoard from "./WeatherBoard";

const Page = () => {
  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <Header />
      <WeatherBoard />
    </div>
  );
};

export default Page;
