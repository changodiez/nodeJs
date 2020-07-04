/*
dos formas de enviar 
weather/:cityName (en el navegador se pone weather/Valencia)
weather?
 */

const express = require("express");
const app = express();
const port = 3000;

app.get("/add", (req, res) => {
  const x1 = req.query.firstNum;
  const x2 = req.query.secondNum;

  result = x1 + x2;
  res.send(result);
});

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

const getArrayMinimal = (cityObject) => {
  return {
    cityName: cityObject.cityName,
    weather: cityObject.weather,
  };
};

//task 1
app.get("/", (req, res) => {
  newArray = myCities.map(getArrayMinimal);

  res.send(newArray);
});
// task 2
app.get("/city/:cityName", (req, res) => {
  const name = req.params.cityName;

  let result = myCities.filter(
    (city) => city.cityName.toLocaleLowerCase() == name.toLocaleLowerCase()
  );
  result = result.map(getArrayMinimal);

  res.send(result);
});

// task 3
app.get("/city", (req, res) => {
  const name = req.query.name;
  const lat = req.query.lat;
  const lon = req.query.lon;
  const id = req.query.id;
  const country = req.query.country;
  const text = req.query.text

  let result;

  if (name) {
    result = myCities.filter((city) => city.cityName == name);
  } else if (lat && lon) { //http://localhost:3000/city?lat=35.5&lon=138.64
       result = myCities.filter(
      (city) => city.latitude == lat && city.longitude == lon
    );
  } else if (id) {
    result = myCities.filter((city) => city.id == id);
  } else if (country) {
    result = myCities.filter((city) => city.country == country);
  } else if (text) {
    result = myCities.filter((city) => city.cityName.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

  res.send(result.map(getArrayMinimal));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
