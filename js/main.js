// Variable Declarations (Selecting DOM items)

const menuOpen = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.full-menu');
const menuBranding = document.querySelector('.avatar')
const menuNav = document.querySelector('.nav-menu')
const navItems = document.querySelectorAll('.nav-item')
const body = document.querySelector('body');
const copyRight = document.getElementById('year');

//Set Initial Menu State
let showMenu = false

const toggleMenu = () => {
  if(!showMenu){
    menuOpen.classList.add('close')
    fullMenu.classList.add('close')
    menuBranding.classList.add('close')
    menuNav.classList.add('close')
    navItems.forEach(item => item.classList.add('close'))

    //Change the Menu State
    showMenu = true
  }else{
    menuOpen.classList.remove('close')
    fullMenu.classList.remove('close')
    menuBranding.classList.remove('close')
    menuNav.classList.remove('close')
    navItems.forEach(item => item.classList.remove('close'))

    //Change the Menu State
    showMenu = false
  }
}

menuOpen.addEventListener('click', toggleMenu)

// Listening to Hamburger Menu
// menuOpen.addEventListener('click', ()=>{
//   fullMenu.style.display = 'block';
//   fullMenu.style.transform = 'scale(1)';
//   body.style.overflow = 'hidden';
// })

// // Listening to Close Button
// menuClose.addEventListener('click', ()=>{
//   fullMenu.style.display = 'none';
//   fullMenu.style.transform = 'scale(0)';
//   body.style.overflow = 'auto';
// })

// CopyRight Year in the Footer
const date = new Date();
const year = date.getFullYear();

copyRight.innerHTML = year;
