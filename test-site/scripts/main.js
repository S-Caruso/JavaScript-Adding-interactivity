const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/foxworld.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});