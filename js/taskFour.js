// VIEW

let obj = {
    gallery: document.querySelector('.gallery'),
    bg: document.querySelector('.fon')

}


// MODEL
function setBg(block, path) {
    block.style.backgroundImage = "url('" + path + "')";
    block.style.backgroundSize = "contain";
}


//CONTROLER
obj.gallery.addEventListener('click', go);

function go(e) {
    let path = e.target.dataset.path;
    console.log(path);
    if (e.target.className == "gallery__img") {
        setBg(obj.bg, path);
    }
}