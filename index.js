var button = document.getElementById("subscribeButton");
var email = document.getElementById("subscribeLabel");
function validateSubscribe(){
 let regexp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)\.([a-z]+)(.[a-z]+)?$/;
 if(regexp.test(email.value)){
  email.value=null;
  button.innerHTML = "Subscribed";
 }
  
 else{
  email.value=null;
  email.setAttribute("placeholder","Enter valid email");
 }
}