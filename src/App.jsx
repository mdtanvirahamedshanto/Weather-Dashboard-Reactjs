import "./App.css";
import Page from "./components/Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="dark">
            <Page />
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
