const DogImage = document.getElementById("dog-img");
const dogBtn = document.getElementById("dog-generator");

const DogImgGenerator = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      DogImage.innerHTML = `<img src='${json.message}' height=300 width=300 />`;
    });
};
dogBtn.onclick = () => DogImgGenerator();
