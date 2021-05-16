var MailValidate = false;
var PasswordValidate = false;

function validateMail(identificadorDeCampo, identificadorDeTexto) {
  const validPasswordReg  = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const addClasses = document.getElementById(identificadorDeCampo).value;
 
  if (addClasses.match(validPasswordReg)) {
    document.getElementById(identificadorDeCampo).classList.remove("is-invalid");
    document.getElementById(identificadorDeCampo).classList.add("is-valid");
    document.getElementById(identificadorDeTexto).classList.add("hide");
    MailValidate = true
  }else if(!addClasses.match(validPasswordReg)){
    document.getElementById(identificadorDeCampo).classList.add("is-invalid");
    document.getElementById(identificadorDeCampo).classList.remove("is-valid");
    document.getElementById(identificadorDeTexto).classList.remove("hide");
    MailValidate = false;
}
console.log(MailValidate);
return MailValidate;
}


function validatepassword() {

  const validPasswordReg  = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}/
  const text = document.getElementById('pass').value;
  if (text.match(validPasswordReg)) {
    document.getElementById('pass').classList.remove("is-invalid");
    document.getElementById('pass').classList.add("is-valid");
    document.getElementById('required-password').classList.add("hide");
    PasswordValidate = true;
  }else if(!text.match(validPasswordReg)){
    document.getElementById('pass').classList.add("is-invalid");
    document.getElementById('pass').classList.remove("is-valid");
    document.getElementById('required-password').classList.remove("hide");
    PasswordValidate = false;
}
console.log(PasswordValidate);
return PasswordValidate;
}

const myForm = document.getElementById('Sign');
myForm.addEventListener('submit', (e)=>{
    if(MailValidate && PasswordValidate){
    $("#Sign").submit();

}else{
  e.preventDefault();
  document.getElementById('mail').classList.add("is-invalid");
  document.getElementById('pass').classList.remove("is-invalid");
  document.getElementById('required-text').classList.remove("hide");
  document.getElementById('required-password').classList.remove("hide");
} 

} )

const myForm1 = document.getElementById('register');
myForm1.addEventListener('submit', (e)=>{
    if(MailValidate && PasswordValidate){
    $("#Sign").submit();

}else{
  e.preventDefault();
  document.getElementById('mail').classList.add("is-invalid");
  document.getElementById('pass').classList.remove("is-invalid");
  document.getElementById('required-text').classList.remove("hide");
  document.getElementById('required-password').classList.remove("hide");
} 

} )




