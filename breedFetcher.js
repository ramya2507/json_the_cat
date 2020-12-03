const request = require('request');
//function to return description of the breed
const fetchBreedDescription = function(breedName, callback) {
  //checking if the argument is being passed
  let url = "https://api.thecatapi.com/v1/breeds/search?name=" + breedName;
  request(url,(error, response, body) => {
    const data = JSON.parse(body);
    try {
      callback(error, data[0].description);
    } catch (err) {
      callback(err);
    }
    
  });
};

module.exports = { fetchBreedDescription };
