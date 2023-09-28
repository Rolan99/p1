const user = document.getElementsByClassName("user")[0]
const pass = document.getElementsByClassName("pass")[0]

const userName = document.getElementsByClassName("user-name")[0]
const password = document.getElementsByClassName("password")[0]

const btnNav = document.getElementsByClassName("btn-nav")[0]
const nav = document.getElementsByClassName("nav")[0]

const eye = document.getElementsByClassName("eye")[0]

user.addEventListener("focus", () => {
    userName.classList.add("focus")
})
user.addEventListener("blur", () => {
    if (user.value == "") {
        userName.classList.remove("focus")
    }
})

pass.addEventListener("focus", () => {
    password.classList.add("focus")
})
pass.addEventListener("blur", () => {
    if (pass.value == "") {
        password.classList.remove("focus")
    }
})

let isOpen = true;

btnNav.addEventListener("click", () => {
    if (isOpen) {
        nav.classList.remove("open")
    } else {
        nav.classList.add("open")
    }
    isOpen = !isOpen
})

let isEyeOpen = false
eye.addEventListener("click", () => {
    if (isEyeOpen) {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
    isEyeOpen = !isEyeOpen
})