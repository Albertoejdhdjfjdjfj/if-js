let input=document.getElementById('fileInput');
let field=document.getElementById('fileField');
let button=document.getElementById('fileButton');
let img=document.getElementById('img');
let form=document.getElementById('form');

field.addEventListener('click',()=>{
  input.click();
  button.hidden=false;
  onloadFile();
  pushButton();
})



function onloadFile(){
  input.addEventListener('change',()=>{
    let file = input.files[0];

  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function() {
    console.log(reader.result);
    img.setAttribute('src',reader.result)
  };

  reader.onerror = function() {
    console.log(reader.error);
  };
  })
}

function pushButton(){
  button.addEventListener('click',()=>{

    let response = fetch('https://fe-student-api.herokuapp.com/api/file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: new FormData(form),
    });
    if (response.ok) { 
      alert('ok')
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  })
}




