const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "b1f4481e-5c1e-4856-8a97-e63b59c09db6";
let storedBreeds = [];

fetch(url, {
  headers: {
    "b1f4481e-5c1e-4856-8a97-e63b59c09db6": api_key,
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement("option");

      //skip any breeds that don't have an image
      if (!breed.image) continue;

      //use the current array index
      option.value = i;
      option.innerHTML = `${breed.name}`;
      document.getElementById("breed_selector").appendChild(option);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

function showBreedImage(index) {
  document.getElementById("breed_image").src = storedBreeds[index].image.url;

  document.getElementById("breed_json").textContent =
    storedBreeds[index].temperament;

  document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;
  document.getElementById("wiki_link").innerHTML =
    storedBreeds[index].wikipedia_url;
}
