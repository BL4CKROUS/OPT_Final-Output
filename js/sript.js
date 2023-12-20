let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function backspace() {
  display.value = display.value.slice(0, -1)
}

function login(){
  const pass= document.getElementById("pass").value
  const passcode= "12345"

  if(pass == passcode) {
      
      window.location.href = "../index.html"
  } else if(pass == "") {
      alert("Please Enter Passcode")
  } else if(pass != passcode) {
      alert("You Enter the Wrong Passcode")
  } 
}

function logout() {
  window.location.replace('../login.html');
}