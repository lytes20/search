import Axios from 'axios';

const makeAxiosCall = searchInput => {
  var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  return Axios.post(searchUrl)
    .then(response => {
      return response.data.meals;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default makeAxiosCall;
