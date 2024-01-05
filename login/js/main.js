var userList=''
userList  =JSON.parse(localStorage.getItem('users'))

var loginEmailInput= document.getElementById('loginEmail')
var loginPasswordInput= document.getElementById('loginPassword')
var loginBtn= document.querySelector('.login .layer .bg-layer-one .bg-layer-two .bg-layer-three .login-button')
var warningBox= document.getElementById('warningBox')
var closeLoginBtn= document.getElementById('closeLogin')

loginBtn.addEventListener('click', function(){
     for (var i = 0; i < userList.length; i++) {
          if (loginEmailInput.value == userList[i].email && loginPasswordInput.value == userList[i].password) {
               var x= userList[i].name
            localStorage.setItem("username", x);
            location.href = "home/home.html";
            warningBox.style.display='none'
          //   clearForm()
          }else{
               warningBox.style.display='block'
          }
     }
})
     
function clearForm() {
     loginEmailInput.value=''
     loginPasswordInput.value=''
}

closeLoginBtn.addEventListener('click',function () {
     warningBox.style.display='none'
})

function show() {
     var y=document.getElementById("loginPassword")
     if (y.type=== "password"){
          y.type="text"
     } else {
          y.type = "password";
        }
}