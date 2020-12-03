const request = require('request');
const breedName = process.argv[2];
//checking if the argument is being passed
if (!breedName) {
  console.log('Breed name hasn\'t been entered!');
  process.exit();
}
let url = "https://api.thecatapi.com/v1/breeds/search?name=" + breedName;

request(url,(error, response, body) => {
  if (error) {
    console.log(response && response.statusCode);
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});