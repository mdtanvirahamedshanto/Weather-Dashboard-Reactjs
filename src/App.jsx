import "./App.css";
import Page from "./components/Page";
import { FavouriteProvider, WeatherProvider } from "./provider";
// import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <div className="dark">
          <Page />
        </div>
      </FavouriteProvider>
    </WeatherProvider>
  );
}
