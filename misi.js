//constantes gaa
const hbds = document.getElementById('hbds')
//funciones generales gaa
function desapElem(event) {
    const targ = event.target;
    targ.parentElement.style.display = 'none';
}

function aparElem(event) {
    const targ = event.target;
    targ.parentElement.style.display = 'flex';
}

//funciones específicas
function cambCesp1(event) {
    desapElem(event);
}

function cambCesp2(event) {
    desapElem(event);
}

function cambCesp3(event) {
    document.getElementsByClassName('carta')[0].style.display = 'flex';
    document.getElementsByClassName('carta')[0].classList.add('cartAnim');
    setTimeout(() => {
        hbds.volume = 0.2;
        hbds.play();
    }, 100);
}

function cambCart(event) {
    document.getElementsByClassName('flor')[0].style.display = 'flex';
    document.getElementsByClassName('flor')[0].classList.add('florAnim')
    setTimeout(() => {
        event.target.parentElement.style.display = 'none'
    document.getElementsByClassName('cesped3')[0].style.display = 'none';
    }, 600);
}

function cambFlor(event) {
    document.getElementsByClassName('luz')[0].style.display = 'flex';
    document.getElementsByClassName('luz')[0].classList.add('luzAnim')
    setTimeout(() => {
        event.target.parentElement.style.display = 'none'
    }, 3000);
}