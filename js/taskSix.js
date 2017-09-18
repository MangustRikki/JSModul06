// VIEW

let trigger = document.querySelector('.trigger__block');
let triggerBox = document.querySelector('.trigger');
let number = 0;

// MODEL



//CONTROLER

trigger.addEventListener('click', go);

function go(e) {
    switch (number) {
        case 0:
            number += 1;
            console.log(number);
            trigger.style.marginLeft = "38%";
            break;
        case 1:
            number += 1;
            console.log(number);
            trigger.style.marginLeft = "78%";
            break;
        default:
            number = 1;
            console.log(number);
            trigger.style.marginLeft = "0%";
            break;
    }
}
