const colorsList = [
  "#ff7373",
  "#008080",
  "#666666",
  "#468499",
  "#333333",
  "#101010",
  "#00ff7f",
];
const colorPTag = document.getElementById("color");
const colorBtn = document.getElementById("color-btn");
const divContainer = document.getElementById("container");

colorBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colorsList.length);
  document.querySelector("body").style.background = colorsList[randomNumber];
  colorPTag.innerHTML = colorsList[randomNumber];

  if (
    colorsList[randomNumber] === "#666666" ||
    colorsList[randomNumber] === "#008080" ||
    colorsList[randomNumber] === "#00ff7f" ||
    colorsList[randomNumber] === "#333333" ||
    colorsList[randomNumber] === "#101010"
  ) {
    divContainer.style.color = "white";
  }

  // We Could SIMPLIFIY it like this cause we choosed all elements in the list (array)
  //   if (colorsList[randomNumber]) divContainer.style.color = "white";
});
