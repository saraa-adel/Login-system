var userNameInput= document.getElementById('userName')
var userEmailInput= document.getElementById('userEmail')
var userPasswordInput= document.getElementById('userPassword')
var rulesBox= document.getElementById('rulesBox')
var closeSignupBtn= document.getElementById('closeSignup')
var userList=[]

if (localStorage.getItem('users')!=null) {
     userList=JSON.parse(localStorage.getItem('users'))
}
function addUser() {
      user={
          name: userNameInput.value,
          email: userEmailInput.value,
          password: userPasswordInput.value
     }

     var userExists = userList.some(existingUser =>existingUser.email === user.email);
     if (userExists) {
         alert("User already exists!");
         return;
     }

     if (!validateName(userNameInput.value) || !validateEmail(userEmailInput.value) || !validatePassword(userPasswordInput.value)) {
          rulesBox.style.display='block'
     }

if (validateName(userNameInput.value) && validateEmail(userEmailInput.value) && validatePassword(userPasswordInput.value)) {
     userList.push(user)
     localStorage.setItem("users" ,JSON.stringify(userList))
     clearForm()
     document.getElementById('successBox').style.display='block'
}
// console.log(userList);
}

function clearForm() {
     userNameInput.value=''
     userEmailInput.value=''
     userPasswordInput.value=''
     userNameInput.classList.remove('is-valid')
     userEmailInput.classList.remove('is-valid')
     userPasswordInput.classList.remove('is-valid')
}

function validateName(name) {
     var regax1=/^\w{3,15}$/
     if (regax1.test(name)) {
          userNameInput.classList.replace('is-invalid' ,'is-valid')
          return true
     }
     else{
          userNameInput.classList.add('is-invalid')
     }
}
function validateEmail(email) {
     var regax2=/^\w{3,10}(\d{3,12})?@\w{3,10}.(com)$/
     if (regax2.test(email)) {
          userEmailInput.classList.replace('is-invalid' ,'is-valid')
          return true
     }
     else{
          userEmailInput.classList.add('is-invalid')
     }
}
function validatePassword(password) {
     var regax3=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*?])[(A-Za-z)\d!@#$%^&*?]{8,}$/
     if (regax3.test(password)) {
          userPasswordInput.classList.replace('is-invalid' ,'is-valid')
          return true
     }
     else{
          userPasswordInput.classList.add('is-invalid')
     }
}

closeSignupBtn.addEventListener('click',function () {
     rulesBox.style.display='none'
})

function show() {
     var y=document.getElementById("userPassword")
     if (y.type=== "password"){
          y.type="text"
     } else {
          y.type = "password";
        }
}