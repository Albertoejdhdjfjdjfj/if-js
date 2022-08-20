const windo = document.getElementById("filter_form_body");
windo.style.display = "none";
const input = document.getElementById("num_people_input");

input.addEventListener("click", clickInput());

const popUpLabel = document.getElementById("popUplabel_children");
const popUpSelect = document.getElementById("popUpselect_children");
popUpLabel.style.display = "none";
popUpSelect.style.display = "none";

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
  popUpSelect,
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
  popUpSelect = undefined,
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

    if (popUpLabel && popUpSelect) {
      popUpLabelAndSelect(inputField_children, popUpLabel, popUpSelect);
    }

    inputParametrs();
  });

  buttonMinus.addEventListener("click", () => {
    if (i > 0) {
      i--;
      inputField.textContent = i;
    } else {
      i = max;
      inputField.textContent = i;
    }
    if (popUpLabel && popUpSelect) {
      popUpLabelAndSelect(inputField_children, popUpLabel, popUpSelect);
    }
  });
}

function popUpLabelAndSelect(inputField_children, popUpLabel, popUpSelect) {
  if (inputField_children.textContent != 0) {
    popUpLabel.style.display = "inline";
    popUpSelect.style.display = "block";
  } else if (inputField_children.textContent == 0) {
    popUpLabel.style.display = "none";
    popUpSelect.style.display = "none";
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
