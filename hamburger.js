// const iconoMenu = document.querySelector('#icono-menu'),
// menu= document.querySelector('#menu');

// iconoMenu.addEventListener('click', (e) =>{
//     menu.classList.toggle('active');
    
// })

const mobileWrapper = document.getElementById("mobile-nav-wrapper");

const backDrop = document.getElementById("darkShadow");

function openHamburger() {
    mobileWrapper.style.display = "block";
    backDrop.style.display = "block"
}

function closeHamburger() {
    mobileWrapper.style.display = "none";
    backDrop.style.display = "none";
}