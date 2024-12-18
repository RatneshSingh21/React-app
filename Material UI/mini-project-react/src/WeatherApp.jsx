import SearchBox from "./SearchBox";
import Info from "./Info";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Noida",
    feelsLike: 31.87,
    humidity: 76,
    temp: 28.16,
    tempMax: 28.16,
    tempMin: 28.16,
    weather: "overcast clouds",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <>
      <h2>Weather App Using React</h2>
      <SearchBox updateInfo={updateInfo}/>
      <br /> <br />
      <Info info={weatherInfo} />
    </>
  );
}
