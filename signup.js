const form2 = document.getElementById('login2');
const form = document.getElementById('login');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email_ = document.getElementById('emailAddress');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirmPassword');

form.addEventListener('submit',(Event)=>{
Event.preventDefault();
checkInputsUp();
});

form.addEventListener('submit',(Event)=>{
 Event.preventDefault();
 checkInputsIn();
 });
function checkInputsUp(){
 const firstnameVal = firstname.value.trim();
 const lastnameVal = lastname.value.trim();
 const phoneVal = phone.value.trim();
 const emailVal= email_.value.trim();
 const passwordVal = password.value.trim();
 const cpasswordVal = cpassword.value.trim();
 let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 let name = /^[A-Za-z\s]+$/;
 let passkey = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

if(firstnameVal===''){
 setErrorFor(firstname,'First name can\'t be blank');
}
else if(name.test(firstnameVal)){
setSuccessFor(firstname);

 }
 else{
  setErrorFor(firstname,'First name is not valid')
 }


 if(lastnameVal===''){
  setErrorFor(lastname,'Last name can\'t be blank');
 }
 else if(name.test(lastnameVal)){
 setSuccessFor(lastname);
 
  }
  else{
   setErrorFor(lastname,'Last name is not valid')
  }

  if(phoneVal===''){
    setErrorFor(phone,'Phone number can\'t be blank');
   }
   else if(phoneno.test(phoneVal)){
   setSuccessFor(phone);
  }
    else{
     setErrorFor(phone,'Phone number is not valid')
    }

  if(emailVal===''){
    setErrorFor(email_,'E-mail can\'t be blank');
   }
   else if(regexp.test(emailVal)){
   setSuccessFor(email_);
   
    }
    else{
     setErrorFor(email_,'E-mail is not valid');
    }
if(passwordVal===''){
    setErrorFor(password,'Password can\'t be blank');
}
else if(passkey.test(passwordVal)){
  setSuccessFor(password);
 }
  
 else{
  setErrorFor(password,'Password is not valid');
 }

if(cpasswordVal===''){
    setErrorFor(cpassword,'Password can\'t be blank');
}
else if(passwordVal !== cpasswordVal) {
  setErrorFor(cpassword, 'Passwords does not match');
 }
else if(passkey.test(cpasswordVal)){
  setSuccessFor(cpassword);
 }


 else{
  setErrorFor(cpassword,'Password is not valid');
 }
}

function setErrorFor(input,message){
 const formControl = input.parentElement;
 const small =formControl.querySelector('small');
 small.innerHTML = message;
 formControl.className = 'control error';
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'control success';
}

password.addEventListener('keyup', function(){
  checkPassword(password.value);
})
function checkPassword(password){
  var strengthBar = document.getElementById('strength');
  var strength = 0;
  if (password.match(/[A-Z]+/)){
    strength ++;
  }
  if (password.match(/[a-z]+/)){
    strength ++;
  }
  if (password.match(/[0-9]+/)){
    strength ++;
  }
  if (password.match(/[~<>?!@#$%^&*(){}|:".,;']+/)){
    strength ++;
  }
  if (password.length >= 8){
    strength ++;
  }
  switch(strength){
    case 0: strengthBar.value = 0;
            break
    case 1: strengthBar.value = 20;
            break
    case 2: strengthBar.value = 40;
            break
    case 3: strengthBar.value = 60;
            break
    case 4: strengthBar.value = 80;
            break
    case 5: strengthBar.value = 100;
            break
  }

}