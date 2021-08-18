import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  }
  const endpoint = `https://images-api.nasa.gov/search?q=${query}`;
  axios
    .get(endpoint)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return "";
};

export default getImages;
