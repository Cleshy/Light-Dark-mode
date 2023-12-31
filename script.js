const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function setImageColorMode(colorMode) {
  image1.src = `img/undraw_proud_coder_${colorMode}.svg`;
  image2.src = `img/undraw_feeling_proud_${colorMode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${colorMode}.svg`;
}

function setToggleIconMode(colorMode) {
  if (colorMode === "dark") {
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  } else {
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  }
}

// Dark Mode Styles
function setDarkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  setToggleIconMode("dark");
  setImageColorMode("dark");
}

// Light Mode Styles
function setLightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  setToggleIconMode("light");
  setImageColorMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    setDarkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    setLightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
