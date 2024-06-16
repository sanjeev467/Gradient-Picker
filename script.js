let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#fff";
let rgb2 = "#000";

const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

// so i want my hex values to lie in this string "0123456789abcdef" i created
// and we need total 6 values from above var which is myHexValues
// so we will run a for loop to get 6 numbers which is needed for hes code
// math.random to get random no but it gives value btw 0-1 so we multiply it with 16
// to get values upto 16
// math.floor to convert decimal into integer for ex 12.234 to 12 only
// creating function for eventlistner

const handleButton1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  btn1.innerHTML = rgb1;
  btn1.style.backgroundColor = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  btn2.innerHTML = rgb2;
  btn2.style.backgroundColor = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

// adding eventlistner click on buttons to change the hex code
btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.innerText);
});
