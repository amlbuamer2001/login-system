document.getElementById('userName').innerHTML=localStorage.getItem('userName');
document.getElementById('logoutBtn').addEventListener('click',function(){
    localStorage.removeItem('userName')
})