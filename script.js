const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const toggleMenu = document.getElementById("toggle-menu");
const toggleText = document.getElementById("toggle-text");
const toggleIcon = document.getElementById("toggle-icon");
const aboutImages = document.querySelectorAll("#about-image");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

/* If the user clicks on a link, remove show class from nav-list */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});

toggleMenu.addEventListener("click", () => {
  navList.classList.toggle("show");
});

function setImageColorMode(isDark) {
  /* aboutImages is a NodeList, you can loop through it */
  /* If you include more svg's, this will handle it */
  aboutImages.forEach((image) => {
    let newImageSrc = isDark
      ? image.src.replace(LIGHT_THEME, DARK_THEME)
      : image.src.replace(DARK_THEME, LIGHT_THEME);

    image.src = newImageSrc;
  });
}

function toggleDarkLightMode(isDark) {
  /* Navigation & Navigation list background color */
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 90%)"
    : "rgb(255 255 255 / 95%)";
  navList.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 90%)"
    : "rgb(255 255 255 / 95%)";
  /* Textbox background color (projects section) */
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  /* Toggle icon textContent - navigation */
  toggleText.textContent = isDark ? "Dark Mode" : "Light Mode";
  /* Toggle icon - navigation */
  isDark
    ? toggleIcon.classList.replace("fa-sun", "fa-moon")
    : toggleIcon.classList.replace("fa-moon", "fa-sun");
  /* About images color mode */
  isDark ? setImageColorMode(true) : setImageColorMode(false);
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    localStorage.setItem("theme", DARK_THEME);
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    localStorage.setItem("theme", LIGHT_THEME);
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
