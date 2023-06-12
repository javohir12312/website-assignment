const startBox = document.querySelector(".startBox")
const drop = document.querySelector(".drop")
const wave = document.querySelector(".wave")
const body = document.body;
const icon = document.querySelector(".header_icon")
const modal = document.querySelector(".modalBg")
const closeModal = document.querySelector(".closeModal")
const ham = document.querySelector(".ham")
const hamOPen = document.querySelector(".hamburger")

modal.style.top = "-150%";
let enterUser = false;
body.style.overflow = 'hidden'

if (localStorage.getItem("Enter")) {
  startBox.style.display = "none"
  drop.style.display = "none"
  wave.style.display = "none"
  body.style.overflowY = 'scroll'

} else {

  setTimeout(() => {
    startBox.style.display = "none"
    drop.style.display = "none"
    wave.style.display = "none"

    enterUser = true;
    body.style.overflow = 'scroll'
    localStorage.setItem("Enter", enterUser)
  }, 4000);
}

setTimeout(() => {
  localStorage.clear
}, 36000);

icon.addEventListener("click", () => {
  modal.style.top = "0%";
  body.style.overflow = 'hidden'
})

closeModal.addEventListener("click", () => {
  modal.style.top = "-120%"
  body.style.overflow = 'scroll'
})

ham.addEventListener("click", () => {
  if (hamOPen.style.top == "10px") {
    hamOPen.style.right = "-100%"
    hamOPen.style.top = "0"
  }else{
    hamOPen.style.right = "0px"
    hamOPen.style.top = "10px"
  }
})