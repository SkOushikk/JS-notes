// https://superheroapi.com/api.php/1379034659327300/245

const getsuperHERO = (id) => {
  //   console.log("hello");
  fetch(`https://superheroapi.com/api.php/1379034659327300/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const Img = json.image.url;
      document.getElementById(
        "image-div"
      ).innerHTML = `<img src="${Img}" height=300 width=300 />`;
    });
};
newhero = () => {
  getsuperHERO(Math.floor(Math.random() * 731));
};
