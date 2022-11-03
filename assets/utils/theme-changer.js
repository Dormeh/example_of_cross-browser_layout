const changer = document.getElementById('theme-changer');
const changerMobile = document.getElementById('theme-changer-mobile');
const html = document.documentElement;
let btnValue = localStorage.getItem("themeBtn");

if (btnValue) applyTheme(btnValue);


changer.addEventListener('change', function() {
  localStorage.setItem("themeBtn", changer.checked);
  applyTheme(localStorage.getItem("themeBtn"));

});

changerMobile.addEventListener('change', function() {
  localStorage.setItem("themeBtn", changerMobile.checked);
  applyTheme(localStorage.getItem("themeBtn"));
});

function applyTheme(value) {
  if (value === "true") {
    html.toggleAttribute('data-theme-dark');
    changer.checked = true;
    changerMobile.checked = true;
  } else if (value === "false") {
    html.removeAttribute('data-theme-dark');
    changer.checked = false;
    changerMobile.checked = false;
  }
}
