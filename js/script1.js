



var p = [];
p[0] = "123";
var e = [];
e[0] = "admin@gmail.com";
function auth() {
  var email = document.getElementById("b1").value;
  var password = document.getElementById("b2").value;
 

  if (email == "" || password == "") {
    alert("Fields can't be Empty");
  } else if (email == e[0] && password == p[0] || password == p[1]) {
    window.location.replace("home.html");
  } else {
    var email = (document.getElementById("b1").style.borderColor = "red");
    var password = (document.getElementById("b2").style.borderColor =
      "red");
    alert("Invalid information");
    return;
  }
}

function create() {
  document.querySelector("h3").innerHTML = "SIGNUP NOW";
  document.querySelector("#name").style.display = "inline";
  document.querySelector("#name1").style.display = "inline";
  document.querySelector(".para").style.display = "none";
  document.querySelector(".para1").style.display = "none";
  document.querySelector(".btn").style.display = "none";
  document.querySelector(".btn1").style.display = "inline";
}
function pass() {
  document.querySelector(".forget").style.display = "inline";
  document.querySelector(".forget-btn").style.display = "inline";
}

function passkey() {
  var pass = document.querySelector(".forget").value;
  p[1] = pass;

  document.querySelector(".forget").style.display = "none";
  document.querySelector(".forget-btn").style.display = "none";
}
function sign() {
  var email = document.getElementById("b1").value;
  var password = document.getElementById("b2").value;

  var n1 = document.getElementById("name").value;

  var n2 = document.getElementById("name1").value;

  if (n1 == "" || n2 == "" || email == "" || password == "") {
    alert("Fields can't be Empty");
  } else {

    var mailformat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailformat)) {
      window.location.replace("home.html");
      
    } else {
      alert("Invalid email address.");
    }
   
  }
}
