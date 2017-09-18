// VIEW

let obj = {
    block: document.querySelector('.block'),
    result: document.querySelector('.result')
}

// MODEL




//CONTROLER

obj.block.addEventListener('mousemove', go);
obj.block.addEventListener('mouseout', end);

function go(e) {
    e.preventDefault();
    console.log(e);
    obj.result.innerHTML = "<p>Координаты X = " + e.clientX + " Координаты У = " +
        e.clientY + "</p>";
}

function end(e) {
    e.preventDefault();
    obj.result.innerHTML = "<p>Мышка убежала из квадрата</p>";
}