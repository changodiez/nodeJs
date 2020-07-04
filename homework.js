const express = require("express");
const homework = express();
const port = 3000;

const morgan = require("morgan");
homework.use(morgan("dev"));

const myCities = [
  {
    id: 1,
    cityName: "Valencia",
    country: "Spain",
    latitude: 39.46,
    longitude: -0.37,
    weather: 28.5,
  },
  {
    id: 2,
    cityName: "Paris",
    country: "Spain",
    latitude: 48.85,
    longitude: 2.27,
    weather: 24.5,
  },
  {
    id: 3,
    cityName: "Estambul",
    country: "Turkey",
    latitude: 41.04,
    longitude: 28.99,
    weather: 34.5,
  },
  {
    id: 4,
    cityName: "Tokyo",
    country: "Japan",
    latitude: 35.5,
    longitude: 138.64,
    weather: 29.5,
  },
];

// let myCitiesFilter = JSON.parse(JSON.stringify(myCities, ["cityName", "weather"]));

// task 1 --- http://localhost:3000/
homework.get("/", (req, res) => {
  console.log("client conected to the endpoit /");
  let cities = myCities.map((city) => ({
    city: city.cityName,
    weather: city.weather,
  }));
  res.send(cities);
});

// task 2  --- http://localhost:3000/city/Valencia
homework.get("/city/:cityName", (req, res) => {
   const name = req.params.cityName;
   console.log(`client conected to the endpoit /city/${name}`);

  let cities = myCities
    .filter((city) => city.cityName == name)
    .map((cityFilter) => ({
      city: cityFilter.cityName,
      weather: cityFilter.weather,
    }));
  res.send(cities);
});

// task 3 --  http://localhost:3000/city?name=Valencia
homework.get("/city", (req, res) => {
  const name = req.query.name;
  let cities = myCities
  .filter((city) => city.cityName == name)
  .map((cityFilter) => ({
    city: cityFilter.cityName,
    weather: cityFilter.weather,
  }));
  res.send(cities);
});

// task 4 --  http://localhost:3000/cityLocation?lat=35.5&lon=138.64
homework.get("/cityLocation", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  console.log(`client request the weather from location  latitude:${lat} & longitude:${lon}`);

  let cities = myCities.filter(
    (city) => city.latitude == lat && city.longitude == lon
  ).map((cityFilter) => ({
    city: cityFilter.cityName,
    weather: cityFilter.weather,
  }));
  res.send(cities);
});

// homework.get("/", (req, res) => {
//   res.send(myCities.map());
// });

// homework.get("/", (req, res) => {
//   res.send(myCities.map());
// });

// homework.get("/", (req, res) => {
//   res.send(myCities.map());
// });

homework.listen(port, () => console.log(`Node listen at port ${port}`));
