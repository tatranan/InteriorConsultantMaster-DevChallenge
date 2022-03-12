const buttonToggleMenu = document.getElementById('button_toggle_menu');
const buttonCloseMenu = document.getElementById('button-close-menu');
const overlayMenu = document.getElementById('overlayMenu');
const container = document.getElementById('container');
buttonToggleMenu.addEventListener('click', () => {
    // overlayMenu.classList.toggle('hidden');
    overlayMenu.style.display = 'block';
    container.style.display = 'none';
    console.log(1);
});
buttonCloseMenu.addEventListener('click', () => {
    // overlayMenu.classList.toggle('hidden');
    overlayMenu.style.display = 'none';
    container.style.display = 'block';
    console.log(1);
})
