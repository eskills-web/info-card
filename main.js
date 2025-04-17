let fullname = document.getElementById("fullname")
let mobile = document.getElementById("mobile")
let email = document.getElementById("email")
let relation = document.getElementById("relation")
let ans = document.getElementById("ans")
let form = document.querySelector("form")

// input 
let ifullname = document.getElementById("ifullname")
let imobile = document.getElementById("imobile")
let iemail = document.getElementById("iemail")
let irelation = document.getElementById("irelation")

form.addEventListener('submit' ,savefun)
function savefun(e){
    e.preventDefault()
    ans.style.display="block"
    fullname.innerText =ifullname.value
    mobile.innerText =imobile.value
    email.innerText =iemail.value
    relation.innerText =irelation.value
    form.reset()
}