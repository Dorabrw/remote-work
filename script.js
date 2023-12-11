
let currentDropdown = null;
let sideMenuOpen = false;
const hamButton = document.querySelector('.ham-dropbtn');
const hamMenu = document.querySelector('.features-ham-menu');
const hamMenuCompany = document.querySelector('.company-ham-menu');
const hamButton1 = document.querySelector('.ham-dropbtn1');

function setupDropdown(dropdownButtonId, dropdownContentId, arrowImageId) {
    const dropdownButton = document.getElementById(dropdownButtonId);
    const dropdownContent = document.getElementById(dropdownContentId);
    const arrowImage = document.getElementById(arrowImageId);

dropdownContent.style.display = 'none';

dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent this click from triggering the document's click event handler
  if (dropdownContent.style.display === 'none') {
    if (currentDropdown) {
        currentDropdown.dropdownContent.style.display = 'none';
        currentDropdown.arrowImage.src = 'pictures/icon-arrow-down.svg';
    }

    dropdownContent.style.display = 'block';
    arrowImage.src = 'pictures/icon-arrow-up.svg'; 
    currentDropdown = {dropdownContent, arrowImage};
  } else {
    dropdownContent.style.display = 'none';
    arrowImage.src = 'pictures/icon-arrow-down.svg'; 
    currentDropdown = null;
  }
});

document.addEventListener('click', function() {
    if (currentDropdown != null) {
        currentDropdown.dropdownContent.style.display = 'none';
        currentDropdown.arrowImage.src = 'pictures/icon-arrow-down.svg';
        currentDropdown = null;
    }
    
  });
}



setupDropdown('features-dropdown', 'features-dropdown-content', 'features-arrow');
setupDropdown('company-dropdown', 'company-dropdown-content', 'company-arrow');


const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("loginForm");
const closeButton = document.getElementById("closeButton");

loginButton.addEventListener("click", () => {
    loginForm.style.display = "block";
});

closeButton.addEventListener("click", () => {
    loginForm.style.display = "none";
});



const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.hamburger-content');

hamburgerMenu.addEventListener('click', function (event) {
  event.stopPropagation();
  if (sideMenu.style.transform === 'translateX(100%)') {
    sideMenu.style.transform = 'translateX(-100%)';
    sideMenuOpen = true;
  } else {
    sideMenu.style.transform = 'translateX(100%)';
  }
});

const closeHamburgerMenu = document.querySelector('.close-ham-menu');
closeHamburgerMenu.addEventListener("click", () => {
  if (sideMenu.style.transform === 'translateX(-100%)') {
    sideMenu.style.transform = 'translateX(100%)';
  } else {
    sideMenu.style.transform = 'translateX(-100%)';
  }
});

document.addEventListener('click', function() {
  if (sideMenuOpen === true) {
    sideMenu.style.transform = 'translateX(100%)';
    sideMenuOpen = false;
    hamMenu.style.display = 'none';
    hamMenuCompany.style.display = 'none';
  }
});



hamButton.addEventListener('click', function(event){
  event.stopPropagation();
  if (hamMenu.style.display === 'block') {
    hamMenu.style.display = 'none';
  } else {
    hamMenu.style.display = 'block';
  }
});

hamButton1.addEventListener('click', function(event){
  event.stopPropagation();
  if (hamMenuCompany.style.display === 'block') {
    hamMenuCompany.style.display = 'none';
  } else {
    hamMenuCompany.style.display = 'block';
  }
});

const hamloginButton = document.querySelector('.ham-login-button');
const hamLoginForm = document.getElementById("loginForm");
const hamCloseButton = document.getElementById("closeButton");

// loginButton.addEventListener("click", function (event) {
//   event.stopPropagation();
//   loginForm.style.display = "block";
// });

// closeButton.addEventListener("click", () => {
//     loginForm.style.display = "none";
// });