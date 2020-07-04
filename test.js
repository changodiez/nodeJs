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

function getData(array, value, value2) {
  let resultado;
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    for (const prop in obj) {
      if (prop == value || prop == value2) {
       console.log(obj[prop])
        return obj[prop]
        
      }
      
    }
  }
}

function getDataMap(array, value, value2) {
  let newArray = array.map(function (obj) {
   let newObj;
   newObj = JSON.parse(JSON.stringify(obj, [value, value2]))
       
   return newObj   
  
  });
  return newArray;
}

city = myCities[0]

cityFilter = JSON.parse(JSON.stringify(city, ["cityName", "weather"])) 

console.log (getDataMap(myCities, "cityName", "weather"))