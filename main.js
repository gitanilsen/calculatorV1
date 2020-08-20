var typed = document.getElementById("typed");
//Display Function
function display(e) {
  typed.innerText += e;
}

//All Clear
function allClr() {
  typed.innerText = "";
}

//clear only
function clr() {
  var current_val = typed.innerText;
  typed.innerText = current_val.slice(0, -1);
}

//Evaluate
function result() {
  //Tries to solve the expression an in case user pass invalid expression than it throws an Error
  try {
    var ex = typed.innerText;
    var result = eval(ex);
    typed.innerText = result;
  } catch (err) {
    typed.innerText = err;
  }
}
