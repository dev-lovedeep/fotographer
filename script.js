const boxes = document.querySelectorAll('.comment-box')
let i = 0;

function visible() {
    if (i == boxes.length) {
        i = 0;
    }

    boxes.forEach(box => {
        box.classList.remove("visible");
    });
    boxes[i].classList.add("visible")
    i++

}
setInterval(visible, 3000);

//code for hamburger menu

const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector('nav')
const navLinks = document.querySelector('nav a')
hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
})
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-visible');
        console.log("i worked")
    })
})
