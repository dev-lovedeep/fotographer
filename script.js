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
