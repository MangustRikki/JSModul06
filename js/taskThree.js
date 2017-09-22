// VIEW

let obj = {
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result')
}

function showSomeDiv(result) {
    let tmp;
    for (let i = 0; i < 301; i++) {
        tmp.innerHTML += "<div class = 'someDiv'></div>";
    }
    result = tmp;
}

// MODEL



//CONTROLER

obj.submit.addEventListener('click', go);
obj.result.addEventListener('mouseover', addRemoveClass);
obj.result.addEventListener('mouseout', addRemoveClass);


function go(e) {
    e.preventDefault();
    showSomeDiv(obj.result);
}

function addRemoveClass(e) {
    e.preventDefault();
    e.target.classList.toggle('someDivMouseOver');
    console.log(e.target.classList);
}