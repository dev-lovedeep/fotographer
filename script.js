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
const navLinks = document.querySelectorAll('nav a')
hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-visible');
})

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        nav.classList.toggle('nav-visible');

    })
}