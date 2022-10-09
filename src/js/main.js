import {cityInput,searchButton,inputField_rooms,inputField_adults,inputDateFrom,inputDateTo} from './variables.js'

window.onload = () => {
  windowOnload();
};


function Slider(data) {
  console.log(data);
  const slider = document.getElementById("wrapper_for_category");
  const button = document.createElement("div");
  button.classList.add("button_arrow_right");
  button.innerHTML = "<svg><use xlink:href=\"#arrow_right\"></use></svg> ";
  sliderImages(slider, data, button, 4);
  button.addEventListener("click", changeImages(slider, data, button, 4));

  searchButton.addEventListener("click", async () => {
    const str = arrAgeOfChildren();
    const response = await fetch(
      `https://fe-student-api.herokuapp.com/api/hotels?search=us&dateFrom=${defineDate(inputDateFrom.value)}&dateTo=${defineDate(inputDateTo.value)}&adults=${inputField_adults.textContent}&children=${str}&rooms=${inputField_rooms.textContent}`,
    );
    const result = findmatches(cityInput.value, await response.json());
    if (result.length == 0) {
      sliderImages(slider, data, button, data < 4 ? data.length : 4);
    } else {
      slider.innerHTML = "";
      sliderImages(slider, result, button, result < 4 ? result.length : 4);
    }
  });
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
    };
  }
}

function findmatches(string, data) {
  if (string == "") {
    return data;
  }
  return data.filter(
    (item) =>
      string.includes(item.name) || string.includes(item.country) || string.includes(item.city),
  );
}

function arrAgeOfChildren() {
  const filter = document.getElementById("filter_form_body");
  const children = filter.children;
  let str = "";
  for (let i = 0; i < children.length; i++) {
    if (children[i].className == "popUpselect_children") {
      str += `${children[i].value}`;
      if (children[i] != children[2] || children[i] != children[children.length - 1]) {
        str += ",";
      }
    }
  }
  console.log(str);
  return str;
}

function defineDate(value){
  if(value===''){
    return new Date().getTime()
  }
 
  return new Date(value).getTime()
}

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