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
    fullMenu.classList.add('show')
    menuBranding.classList.add('show')
    menuNav.classList.add('show')
    navItems.forEach(item => item.classList.add('show'))
    
    body.style.overflow = 'hidden'

    //Change the Menu State
    showMenu = true
  }else{
    menuOpen.classList.remove('close')
    fullMenu.classList.remove('show')
    menuBranding.classList.remove('show')
    menuNav.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))
    body.style.overflowY = 'visible'

    //Change the Menu State
    showMenu = false
  }
}

//-- Disabling Scrolling --//
// const disableScroll = () => {
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   window.onscroll = () => {
//     window.scrollTo(scrollTop)
//   }
// }

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

//-- Handing Page Bookmarks --//
const exploreBtn = document.getElementById("explore");

exploreBtn.addEventListener('click', (e) => {

  var featureProjects = document.getElementById("projects")

  featureProjects.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  e.preventDefault();
})
