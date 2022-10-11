const cityInput = document.getElementById("city_input");
const searchButton = document.getElementById("searchButton");
const inputDateFrom=document.getElementById("DateFrom");
const inputDateTo=document.getElementById("DateTo");

const windo = document.getElementById("filter_form_body");
const input = document.getElementById("num_people_input");
const popUpLabel = document.getElementById("popUplabel_children");

const buttonPlus_adults = document.getElementById("plus_adults");
const buttonMinus_adults = document.getElementById("minus_adults");
const inputField_adults = document.getElementById("input_field_adults");

const buttonPlus_children = document.getElementById("plus_children");
const buttonMinus_children = document.getElementById("minus_children");
const inputField_children = document.getElementById("input_field_children");

const buttonPlus_rooms = document.getElementById("plus_rooms");
const buttonMinus_rooms = document.getElementById("minus_rooms");
const inputField_rooms = document.getElementById("input_field_rooms");

export {cityInput,searchButton,inputField_rooms,inputField_adults,inputDateFrom,inputDateTo};
export {buttonMinus_rooms,buttonPlus_rooms,inputField_children,buttonMinus_children,buttonPlus_children,buttonMinus_adults,buttonPlus_adults,popUpLabel,input,windo};