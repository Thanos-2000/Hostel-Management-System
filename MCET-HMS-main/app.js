
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
/*Validation from here*/ 

function seterror(id,error){
  let element=document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML=error;

}
function clearError(){
  let errors=document.getElementsByClassName('formerror');
  for(let item of errors){
      item.innerHTML="";
  }
}
/*Login varibales*/
let bool=true;
function validateForm(){
  let returnval=true;
  let c1=1,c2=1,c3=1,c4=1,c5=1;
  clearError();
  var name=document.forms['myForm']["fname"].value;
  if(name.length<5){
      seterror("name","*Username_too_short");
      returnval=false;c1=0;
  }
  var email=document.forms['myForm']["femail"].value;
  if(email.length>30){
      seterror("email","*Email_too_Long");
      returnval=false;c2=0;
  }
  var phone=document.forms['myForm']["fphone"].value;
  phn=phone.length;
  if(phone.length!=10){
      seterror("phone","*Should_be_10_digits_only");
      returnval=false;c3=0;
  }
  var password=document.forms['myForm']["fpass"].value;
  if(password.length<6){
      seterror("pass","*Atleast_6_character");
      returnval=false;c4=0;
  }
  var cpassword=document.forms['myForm']["fcpass"].value;
  if(password!=cpassword){
    seterror("cpass","*Password_Mismatch!");
      returnval=false;bool=false;c5=0;
  }
return returnval;
}
// document.getElementById("anchor").addEventListener("click", function(event){
//   event.preventDefault()
// });
function fnew(){
  console.log(validateForm());
  if(validateForm()==true){
  alert("Sign Up Successful");
  window.location.assign("success.html");}
}











