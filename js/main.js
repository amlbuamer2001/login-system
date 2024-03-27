var signName=document.getElementById('signName');
var signPass=document.getElementById('signPass');
var signEmail=document.getElementById('signEmail');
var loginEmail=document.getElementById('loginEmail');
var loginPass=document.getElementById('loginPass');
var loginPage=document.getElementsByClassName('login')
var usernameAlert=document.getElementById('usernameAlert');
var userEmailAlert=document.getElementById('userEmailAlert');
var userPasswordAlert=document.getElementById('userPasswordAlert');
var existMsg=document.getElementById('existMsg')
var confirmMsg=document.getElementById('confirmMsg');
var tryAgainMsg=document.getElementById('tryAgainMsg');
var fillMsg=document.getElementById('fillMsg');
var wrongMsg=document.getElementById('wrongMsg');
var loginBtn=document.getElementById('loginBtn');


var user;
if(localStorage.getItem('user')!=null){
   user=JSON.parse(localStorage.getItem('user'))
}else{
   user=[]
}

function addSignUp(){

   userValidation()
   isExist()
      if(userValidation()==true && isExist()==false){
            var obj={
               name:signName.value,
               email:signEmail.value,
               password:signPass.value
            }
            user.push(obj);
            localStorage.setItem('user',JSON.stringify(user));
            confirmMsg.classList.replace("d-none", "d-block");
         }else{
            tryAgainMsg.classList.replace("d-none", "d-block");
         }
}

function userNameValid(){
   var regxName=/^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
   if(regxName.test(signName.value)==true && signName.value!=''){
      signName.classList.add('is-valid');
      signName.classList.remove('is-invalid');
      usernameAlert.classList.replace('d-block','d-none');
      return true;
   }else{
      signName.classList.add('is-invalid');
      signName.classList.remove('is-valid');
      usernameAlert.classList.replace('d-none','d-block');
      return false;
   }
}

function passwordValid(){
   var regxPass=/^.{5,15}$/;  // . => any char     * => any num
   if(regxPass.test(signPass.value)==true && signPass.value!=''){
      signPass.classList.add('is-valid');
      signPass.classList.remove('is-invalid');
      userPasswordAlert.classList.replace('d-block','d-none');
      return true;
   }else{
      signPass.classList.add('is-invalid');
      signPass.classList.remove('is-valid');
      userPasswordAlert.classList.replace('d-none','d-block');
      return false;
   }
}

function emailValid(){
   var regxemail=/@[a-z]{5,10}(\.com)$/;
   if(regxemail.test(signEmail.value)==true && signEmail.value!=''){
      signEmail.classList.add('is-valid');
      signEmail.classList.remove('is-invalid');
      userEmailAlert.classList.replace('d-block','d-none');
      return true;
   }else{
      signEmail.classList.add('is-invalid');
      signEmail.classList.remove('is-valid');
      userEmailAlert.classList.replace('d-none','d-block');
      return false;
   }
}

function userValidation(){
   userNameValid();   
   emailValid();
   passwordValid();
    if( (userNameValid() == true && emailValid() == true && passwordValid() == true))
    {
        return true
    }
    else
    {
        return false
    }
}


function isExist(){
   for (let i = 0; i < user.length; i++) {
      if(user[i].name.toLowerCase()==signName.value.toLowerCase()||user[i].email.toLowerCase()==signEmail.value.toLowerCase()){
         signName.classList.remove('is-valid')
         signEmail.classList.remove('is-valid')
         existMsg.classList.replace('d-none','d-block')
         return true;
      }else{
         return false;
      }
      
   }
}





var userName=localStorage.getItem("userName")
function addLogin(){
   if(loginEmail.value==''||loginPass.value==''){
      fillMsg.classList.replace("d-none","d-block")
      return false;
   }
   for (let i = 0; i < user.length; i++) {
      if(user[i].email.toLowerCase()==loginEmail.value.toLowerCase() && user[i].password.toLowerCase()==loginPass.value.toLowerCase()){
         localStorage.setItem('userName',user[i].name)
         window.open("home/home.html","_blank")
      }else{
         wrongMsg.classList.replace("d-none","d-block")
      }
   }
}

function displayWelcomeUser(){
   document.getElementById("userName").innerHTML=userName;
}













// function hbl(){
//   window.open("home/home.html","_blank")
// }