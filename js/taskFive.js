// VIEW

let ball = document.querySelector('.ball__item');
let magrinCout = 0;


// MODEL


//CONTROLER

ball.addEventListener('click', go);

function go(e) {
    while (magrinCout < 400) {
        magrinCout += 100;
        ball.style.marginTop = magrinCout + "px";
        return magrinCout;
    }
    return ball.style.marginTop = magrinCout = 0;

}