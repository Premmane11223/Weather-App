import "./App.css";
import { useState,useEffect } from "react";
// import search_icon from "./assets/search.png";
// import rain_icon from "./assets/rain.png";
// import clear_icon from "./assets/clear.png";
// import cloud_icon from "./assets/cloud.png";
// import drizzle_icon from "./assets/drizzle.png";
// import snow_icon from "./assets/snow.png";
// import wind_icon from "./assets/wind.png";
// import humidity_icon from "./assets/humidity.png";

const getWeatherData = async (BASE_URL)=>{
let response =  await fetch(BASE_URL)
console.log(response)
return await response.json()
}
 
function App() {
  const [location, setLocation] = useState();
  const [data,setData] =useState()

  const API_KEY = "ad1158016a1ba9cc9672ec6d7ceb24ed";
  const BASE_URL =   `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ad1158016a1ba9cc9672ec6d7ceb24ed`;

useEffect(() => {
  getWeatherData(BASE_URL)
},[location])

  return (
    <div className="weather">
      <div className="search-bar">
        <input
         type="text"  id="" placeholder="Search" onChange={(e)=>setLocation(e.target.value)}/>
        {/* <img src={search_icon} alt="search" />.. */}
      </div>
      <div className="align">
        {/* <img src={clear_icon} alt="clear" className="weather-icon" />.. */}
        <div className="content">
          <p className="temperature">16˚C</p>
          <p className="location">London</p>
        </div>
      </div>

      <div className="weather-data">
        <div className="col">
          {/* <img src={humidity_icon} alt="humidity" />.. */}
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          {/* <img src={wind_icon} alt="wind" /> .. */}
          <div>
            <p>3.6Km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;