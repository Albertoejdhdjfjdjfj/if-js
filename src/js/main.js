window.onload = () => {
  windowOnload();
};

function windowOnload() {
  if (sessionStorage.getItem("data")) {
    const data = JSON.parse(sessionStorage.getItem("data"));
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
  sliderImages(slider, data, button, 0, 4);
  changeImages(button, slider, data, 4);
  button.addEventListener("click", changeImages(slider, data, button, 4));
}

function sliderImages(blockbody, data, button, i, lenght) {
  for (let start = i; start < lenght + i; start++) {
    const object = document.createElement("div");
    object.classList.add("object");
    object.innerHTML = `<a href=""><img src="${data[start].imageUrl}"></a><h3>${data[start].name}</h3> <p>${data[start].city}, ${data[start].country}</p>`;
    blockbody.appendChild(object);
    if (start == data.lenght - lenght) {
      break;
    }
  }

  blockbody.appendChild(button);
}

function changeImages(blockbody, data, button, lenght) {
  let start = lenght - 1;
  return function () {
    blockbody.innerHTML = "";
    sliderImages(blockbody, data, button, start, lenght);
    if (start == data.length - lenght) return (start = 0);
    return start++;
  };
}
