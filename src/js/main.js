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

function sliderImages(blockBody, data, button, size) {
  for (let start = 0; start < size; start++) {
    const object = document.createElement("div");
    object.classList.add("object");
    object.innerHTML = `<a href="#"><img src="${data[start].imageUrl}" alt="${data[start].name}"></a><h3>${data[start].name}</h3> <p>${data[start].city}, ${data[start].country}</p>`;
    blockBody.appendChild(object);
  }

  blockBody.appendChild(button);
}

function changeImages(blockBody, data, button, size) {
  if (data.length > size) {
    let copyData = data;
    copyData = data.concat(data);
    return function () {
      copyData.shift();
      if (copyData.length === data.length) copyData = copyData.concat(data);
      blockBody.innerHTML = "";
      sliderImages(blockBody, copyData, button, size);
    };
  }
}
