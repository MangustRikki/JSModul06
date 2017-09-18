// VIEW

let obj = {
    counter: 1,
    folder: document.querySelector('.doubleClick'),
    increaseCounter: function() {
        this.counter++;
    }
}

function changeBg(counter, someDiv) {
    if (counter % 2 != 0) {
        someDiv.style.background = "url('../img/open-closed-folder-icons-png.png') -400px 0 no-repeat";
        someDiv.style.backgroundSize = "cover";
    } else {
        someDiv.style.background = "url('../img/open-closed-folder-icons-png.png') 0 0 no-repeat";
        someDiv.style.backgroundSize = "cover";
    }
}

// MODEL




//CONTROLER

obj.folder.addEventListener('dblclick', go);

function go(e) {
    e.preventDefault(e);
    changeBg(obj.counter, obj.folder);
    obj.increaseCounter();
}