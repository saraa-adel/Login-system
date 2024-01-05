document.getElementById('username').innerHTML= localStorage.getItem('username')
document.getElementById('logoutBtn').addEventListener('click',function(){
     localStorage.removeItem('username')
})