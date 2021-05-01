
document.addEventListener('DOMContentLoaded', init)

function init(){
document.getElementById('click1').addEventListener('click', doSomething);
function doSomething(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value ;
    if(username == password){
        document.getElementById('result').textContent = 'Authenticated'
    } else{
        document.getElementById('result').textContent = 'Not Authenticated'
    }
    console.log(username)
}

}