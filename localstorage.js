// SignUp
document.getElementById('SignUp').addEventListener('click',()=>{
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;

    localStorage.setItem('username',name)
    localStorage.setItem('password',pass)
})

document.getElementById('LogIn').addEventListener('click',()=>{
    // fetching data from localstorage
    var localname =localStorage.getItem('username')
    var localpass =localStorage.getItem('password')

    // getting value for user input

    var user = document.getElementById('loginname').value;
    var pass = document.getElementById('loginpass').value;

    if(localname ==user && localpass ==pass){
        document.getElementById('Correct').innerHTML =`LogIn Successful <br> Welcome ${user}`
    }else{
        document.getElementById('Wrong').innerText ="Incorrect username or password"
    }
})
// Show Password
document.getElementById('show').addEventListener('click',()=>{
    var showpass  = document.getElementById('loginpass');

    if(showpass.type =='password'){
        showpass.type = 'text'
    }else{
        showpass.type = 'password'
    }
})