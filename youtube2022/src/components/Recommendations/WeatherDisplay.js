import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Weather from "./Weather";
// import Axios from "axios";


export default function WeatherDisplay() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();

  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log(lat, long);
    let data = await fetch(
      `${process.env.REACT_APP_API_URL}weather/?lat=12.971599&lon=77.594566&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    let result = await data.json();
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          {typeof data != "undefined" ? (
            <>
              {console.log(data)}
              <Weather weatherData={data} />
            </>
          ) : (
            <div>{console.log("Lost data" + data)}</div>
          )}
        </div>
      </div>
    </div>
  );
}
