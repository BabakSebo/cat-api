let surprise_btn = document.getElementById("surprise_btn");
let catImage = document.getElementById("catImage");

surprise_btn.addEventListener("click", getCatImage);

function getCatImage() {
  fetch(" https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then(
      (jsonData) => (catImage.innerHTML = `<img src="${jsonData[0].url}" />`)
    );
}
