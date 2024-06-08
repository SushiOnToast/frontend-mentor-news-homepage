const popoutMenu = document.querySelector('#mobile-popout');
const parentElement = document.querySelector('#parent');

function openMenu() {
    popoutMenu.style.display = 'flex';
    parentElement.classList.add('background');

}

function closeMenu() {
    popoutMenu.style.display = 'none'
    parentElement.classList.remove('background');
}