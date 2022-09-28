const windo = document.getElementById("filter_form_body");
windo.style.display = "none";
const input = document.getElementById("num_people_input");

input.addEventListener("click", clickInput());

const popUpLabel = document.getElementById("popUplabel_children");
popUpLabel.style.display = "none";

const buttonPlus_adults = document.getElementById("plus_adults");
const buttonMinus_adults = document.getElementById("minus_adults");
const inputField_adults = document.getElementById("input_field_adults");
changeNumber(buttonPlus_adults, buttonMinus_adults, inputField_adults, 30);

const buttonPlus_children = document.getElementById("plus_children");
const buttonMinus_children = document.getElementById("minus_children");
const inputField_children = document.getElementById("input_field_children");
changeNumber(
  buttonPlus_children,
  buttonMinus_children,
  inputField_children,
  10,
  popUpLabel,
  inputField_adults,
);

const buttonPlus_rooms = document.getElementById("plus_rooms");
const buttonMinus_rooms = document.getElementById("minus_rooms");
const inputField_rooms = document.getElementById("input_field_rooms");
changeNumber(buttonPlus_rooms, buttonMinus_rooms, inputField_rooms, 30);

function changeNumber(
  buttonPlus,
  buttonMinus,
  inputField,
  max,
  popUpLabel = undefined,
  inputField_adults = undefined,
) {
  let i = inputField.textContent;

  buttonPlus.addEventListener("click", () => {
    if (i < max) {
      i++;
      inputField.textContent = i;
    } else {
      i = 0;
      inputField.textContent = i;
    }

    if (popUpLabel) {
      popUpLabelAndSelect(inputField_children, popUpLabel);
    }

    inputParametrs();
    if (inputField_adults != undefined && inputField_adults.textContent > 0) {
      selectNum();
    }
  });

  buttonMinus.addEventListener("click", () => {
    if (i > 0) {
      i--;
      inputField.textContent = i;
    } else {
      i = max;
      inputField.textContent = i;
    }
    if (popUpLabel) {
      popUpLabelAndSelect(inputField_children, popUpLabel);
    }
    inputParametrs();
    if (inputField_adults != undefined && inputField_adults.textContent > 0) {
      selectNum();
    }
  });
}

function popUpLabelAndSelect(inputField_children, popUpLabel) {
  if (inputField_children.textContent != 0) {
    popUpLabel.style.display = "inline";
  } else if (inputField_children.textContent == 0) {
    popUpLabel.style.display = "none";
  }
}

function clickInput() {
  let i = true;
  return function () {
    if (i) {
      windo.style.display = "flex";
      i = !i;
    } else {
      windo.style.display = "none";
      i = !i;
    }
  };
}

function inputParametrs() {
  input.textContent = `${inputField_adults.textContent} Adults — ${inputField_children.textContent} Children — ${inputField_rooms.textContent} Room`;
}

function selectNum() {
  const selects = document.getElementsByClassName("popUpselect_children");
  if (selects.length < inputField_children.textContent) {
    for (let i = selects.length; i < inputField_children.textContent; i++) {
      const popUpSelect = document.createElement("select");
      popUpSelect.classList = "popUpselect_children";
      popUpSelect.id = "popUpselect_children";
      popUpSelect.innerHTML =
        "<option value='0'>0 years old</option><option value='1'>1 years old</option><option value='2'>2 years old</option><option value='3'>3 years old</option><option value='4'>4 years old</option><option value='5'>5 years old</option><option value='6'>6 years old</option><option value='7'>7 years old</option><option value='8'>8 years old</option>";
      windo.appendChild(popUpSelect);
    }
  } else if (selects.length > inputField_children.textContent) {
    for (let i = selects.length; i > inputField_children.textContent; i--) {
      windo.removeChild(document.getElementById("popUpselect_children"));
    }
  }
}
