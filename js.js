let boxEmailField = document.querySelector(".box .email-field");
let boxSubmit = document.querySelector(".box .submit-email");
let thanksDismiss = document.querySelector(".thanks .submit-dismiss");
let box = document.querySelector(".box")
let thanks = document.querySelector(".thanks");
let validation = document.querySelector(".validation");
let emailForm = document.querySelector(".email-form");
let thanksEmail = document.querySelector(".thanks-email");

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailForm.onsubmit = function (e) {
  e.preventDefault();
  let emailValue = boxEmailField.value.trim();
  if(emailRegex.test(emailValue)){
    box.style.display= "none";
    thanks.style.display = "flex";
    thanksEmail.innerHTML = emailValue;
  }else {
    validation.style.display = "flex";
    boxEmailField.classList.add("wrong-field")
  }
};
thanksDismiss.onclick = function(){
  window.location.reload();
  
}