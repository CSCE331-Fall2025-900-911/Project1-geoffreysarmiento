window.onload = function() {
  const savedStyle = localStorage.getItem("theme-style");
  const link = document.getElementById("theme-style");
  if (savedStyle) {
    link.setAttribute("href", savedStyle);
  }
}

function toggleStyle() {
  const link = document.getElementById("theme-style");
  let newStyle;
  if (link.getAttribute("href") === "style.css") {
    newStyle = "style2.css";
  } else {
    newStyle = "style.css";
  }
  link.setAttribute("href", newStyle);
  localStorage.setItem("theme-style", newStyle);
}