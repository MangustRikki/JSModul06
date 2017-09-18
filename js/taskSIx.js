// VIEW

let trigger = document.querySelector('.trigger__block');
let triggerBox = document.querySelector('.trigger');
let number = 1;

// MODEL



//CONTROLER

trigger.addEventListener('click', go);

function go(e) {
    switch (number) {
        case 1:
            trigger.style.marginLeft = "38%";
            number += 1;
            console.log(number);
            break;
        case 2:
            number += 1;
            trigger.style.marginLeft = "78%";
            console.log(number);
            break;
        default:
            number = 1;
            trigger.style.marginLeft = "0%";
            console.log(number);
            break;
    }
}