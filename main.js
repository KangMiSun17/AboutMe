const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const theme_change = document.querySelector('.theme_change');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function myFunction(){
    let body = document.body;
    body.classList.toggle("dark_mode");
}