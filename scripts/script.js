//Variables for Projects Section
let proj1 = document.querySelector('.proj1');
let projDropBtn = document.getElementById('projDropBtn');
let showRow2 = document.querySelector('.row2');
let btnText = document.querySelector('#projDropBtn');

//Variables for Hamburger Menu
const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon')


//NAV SECTION ------------------------
//Hamburger
function toggleMenu() {
  console.log('Hamburger clicked, toggleMenu function run');

  if (menu.classList.contains("showMenu")) {
    console.log('menu.classList.contains showMenu');
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

//hides close dropdown button on initial page load
const startClosed = () => closeIcon.style.display = "none";
startClosed();

//PROJECTS SECTION ------------------------
//makes proj section div's clickable links
proj1.addEventListener('click', () => {
  window.location.href = "./newpage.html";
});

//expands project row2
projDropBtn.addEventListener('click', () => {
  showRow2.classList.toggle('showRow2');
  if (getComputedStyle(showRow2).display === 'flex') {
    btnText.innerHTML = 'See Less';
  } else {
    btnText.innerHTML = 'See More';
  };
});



