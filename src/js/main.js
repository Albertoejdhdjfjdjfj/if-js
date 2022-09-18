const input = document.getElementById("fileInput");
const field = document.getElementById("fileField");
const button = document.getElementById("fileButton");
const img = document.getElementById("img");
const form = document.getElementById("form");

field.addEventListener("click", () => {
  input.click();
  button.hidden = false;
  onloadFile();
  pushButton();
});

function onloadFile() {
  input.addEventListener("change", () => {
    const file = input.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      console.log(reader.result);
      img.setAttribute("src", reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  });
}

function pushButton() {
  button.addEventListener("click", () => {
    const response = fetch("https://fe-student-api.herokuapp.com/api/file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: new FormData(form),
    });
    
    if (response.ok) {
      alert("ok");
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  });
}
