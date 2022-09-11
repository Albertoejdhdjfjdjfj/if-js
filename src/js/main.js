window.onload = () => {
  windowOnload();
};

function windowOnload() {
  const sessionStore = sessionStorage.getItem("data");
  if (sessionStore) {
    const data = JSON.parse(sessionStore);
    Slider(data);
  } else {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("data", JSON.stringify(data));
        Slider(data);
      });
  }
}

function Slider(data) {
  const slider = document.getElementById("wrapper_for_category");
  const button = document.createElement("div");
  button.classList.add("button_arrow_right");
  button.innerHTML = "<svg><use xlink:href=\"#arrow_right\"></use></svg> ";
  sliderImages(slider, data, button, 4);
  button.addEventListener("click", changeImages(slider, data, button, 4));
}

function sliderImages(blockbody, data, button, size) {
  for (let start = 0; start < size; start++) {
    const object = document.createElement("div");
    object.classList.add("object");
    object.innerHTML = `<a href=""><img src="${data[start].imageUrl}"></a><h3>${data[start].name}</h3> <p>${data[start].city}, ${data[start].country}</p>`;
    blockbody.appendChild(object);
  }

  blockbody.appendChild(button);
}

function changeImages(blockbody, data, button, size) {
  if (data.length > size) {
    let copydata = data;
    copydata = data.concat(data);
    return function () {
      copydata.shift();
      if (copydata.length == data.length) copydata = copydata.concat(data);

      blockbody.innerHTML = "";
      sliderImages(blockbody, copydata, button, size);
      console.log(copydata);
    };
  }
}
