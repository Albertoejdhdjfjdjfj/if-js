const data = [
  {
    id: "71ce9eac-e9b9-44f0-a342-9ff0b565f3b7",
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg",
  },
  {
    id: "aa560608-a879-48a7-80b6-deff2806b250",
    name: "Apartment Sunshine",
    city: "Santa  Cruz de Tenerife",
    country: "Spain",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg",
  },
  {
    id: "1d88fefe-edf1-4cda-844a-babbf29bb2b3",
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg",
  },
  {
    id: "a2bf824d-edd8-41f0-8b70-244334086ab4",
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg",
  },
  {
    id: "4024535d-a498-4274-b7cb-f01ada962971",
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg",
  },
  {
    id: "e51e71f6-6baf-4493-b3ae-25dc27cdc238",
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg",
  },
  {
    id: "87d2b966-2431-43f3-8c0d-2c8723474dfc",
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg",
  },
  {
    id: "190221c6-b18f-4dba-97de-e35f0e14c023",
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg",
  },
];

const slider = document.getElementById("wrapper_for_category");
const button = document.createElement("div");
button.classList.add("button_arrow_right");
button.innerHTML = "<svg><use xlink:href=\"#arrow_right\"></use></svg> ";
sliderImages(slider, data, button, 4);
button.addEventListener("click", changeImages(slider, data, button, 4));

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
  let copydata = data.concat(data);
  return function () {
    copydata.shift();
    if (copydata.length == data.length) copydata = copydata.concat(data);
    blockbody.innerHTML = "";
    sliderImages(blockbody, copydata, button, size);
    console.log(copydata);
  };
}
const windo=document.getElementById("filter_form_body");
windo.style.display="none";
const input=document.getElementById("num_people_input");

input.addEventListener("mouseover",()=>{
  windo.style.display="flex";
})

addEventListener("dblclick",()=>{
  windo.style.display="none";
})

const popUpLabel=document.getElementById("popUplabel_children");
const popUpSelect=document.getElementById("popUpselect_children");
popUpLabel.style.display="none";
popUpSelect.style.display="none";

const buttonPlus_adults=document.getElementById("plus_adults");
const buttonMinus_adults=document.getElementById("minus_adults");
const inputField_adults=document.getElementById("input_field_adults");
changeNumber(buttonPlus_adults,buttonMinus_adults,inputField_adults,30);

const buttonPlus_children=document.getElementById("plus_children");
const buttonMinus_children=document.getElementById("minus_children");
const inputField_children=document.getElementById("input_field_children");
changeNumber(buttonPlus_children,buttonMinus_children,inputField_children,10,popUpLabel,popUpSelect);

const buttonPlus_rooms=document.getElementById("plus_rooms");
const buttonMinus_rooms=document.getElementById("minus_rooms");
const inputField_rooms=document.getElementById("input_field_rooms");
changeNumber(buttonPlus_rooms,buttonMinus_rooms,inputField_rooms,30);

function changeNumber(buttonPlus,buttonMinus,inputField,max,popUpLabel=undefined,popUpSelect=undefined){
  let i = inputField.textContent;
  buttonPlus.addEventListener("click",()=> {
    if(i<max){i++;  inputField.textContent=i;}
    else {i = 0;inputField.textContent=i;}
    if(popUpLabel&&popUpSelect){
    popUpLabelAndSelect(inputField_children,popUpLabel,popUpSelect);
    }
  })

  buttonMinus.addEventListener("click",()=> {
    if(i>0){i--;  inputField.textContent=i;}
    else {i = max; inputField.textContent=i;}
    if(popUpLabel&&popUpSelect){
      popUpLabelAndSelect(inputField_children,popUpLabel,popUpSelect);
    }
  })
}

 function popUpLabelAndSelect(inputField_children,popUpLabel,popUpSelect){
   if(inputField_children.textContent!=0){
    popUpLabel.style.display="inline";
    popUpSelect.style.display="block";
   }
  else if(inputField_children.textContent==0){
    popUpLabel.style.display="none";
    popUpSelect.style.display="none"; 
  }
}