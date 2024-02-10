import "./App.css";
import Page from "./components/Page";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <WeatherProvider>
      <div className="dark">
        <Page />
      </div>
    </WeatherProvider>
  );
}
