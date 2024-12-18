import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e1592a9e6e3dc6d8d9f8d36c419a861&units=metric`;

  let getResponse = async () => {
    try {
      let response = await fetch(API_URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleInput = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      console.log(city);
      setCity("");
      let info = await getResponse();
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          onChange={handleInput}
          value={city}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p> no such place exist</p>}
      </form>
    </div>
  );
}
