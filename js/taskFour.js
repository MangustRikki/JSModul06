// VIEW

let obj = {
    gallery: document.querySelector('.gallery'),
    bg: document.querySelector('.fon')

}


// MODEL
function setBg(block, path) {
    block.style.backgroundImage = "url('../" + path + "')";
    block.style.backgroundSize = "contain";
}


//CONTROLER
obj.gallery.addEventListener('click', go);

function go(e) {
    let realPath = e.target.src;
    let relativePath;
    if (e.target.className == "gallery__img") {
        relativePath = realPath.replace(/^(?:\/\/|[^\/]+)*\//, "");
        setBg(obj.bg, relativePath);
    }
}