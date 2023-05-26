const startBox = document.querySelector(".startBox")
const drop = document.querySelector(".drop")
const wave = document.querySelector(".wave")
const body = document.body;

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