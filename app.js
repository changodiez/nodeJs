
let cities;

const getInfo = () => {
    fetch('http://localhost:3000/')
      .then((response) => onResponse(response))
      .catch((error) => onError(error));
  };

  const onResponse = (response) => {
    response.json().then((data) => buildMovieInfo(data));
  };

  const buildMovieInfo = (data) => {
    const cities = data ;
    return cities;
  };

  const onError = (error) => {
    console.log("something went wrong", error);
  };

