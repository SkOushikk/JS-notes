console.log("Hello");

const dogImageDiv = document.getElementById("dogImage");
const dogbutton = document.getElementById("NewDog");

const getNewdog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.message);
      dogImageDiv.innerHTML = `<img src='${json.message}'
        height=300 width=300
    />`;
    });
};
dogbutton.onclick = () => getNewdog();
