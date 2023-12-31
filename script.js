const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const aboutImages = document.querySelectorAll("#about-image");
const textBox = document.getElementById("text-box");

function setImageColorMode(isDark) {
  /* aboutImages is a NodeList, you can loop through it */
  /* If you include more svg's, this will handle it */
  aboutImages.forEach((image) => {
    let newImageSrc = isDark
      ? image.src.replace("light", "dark")
      : image.src.replace("dark", "light");

    image.src = newImageSrc;
  });
}

function toggleDarkLightMode(isDark) {
  /* Navigation background color */
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  /* Textbox background color (projects section) */
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  /* Toggle icon textContent - navigation */
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  /* Toggle icon - navigation */
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  /* About images color mode */
  isDark ? setImageColorMode(true) : setImageColorMode(false);
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
