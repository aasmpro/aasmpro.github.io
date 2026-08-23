const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const signs = "!@#$%&*:;<>{}[]()";

const allChars = upper + lower + number + signs;

const randomChar = (chars = allChars) => {
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

let elements = document.getElementsByClassName("text-dark-0");

for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = randomChar();
}

for (let i = 0; i < elements.length; i++) {
  setInterval(function () {
    elements[i].innerHTML = randomChar();
  }, Math.floor(Math.random() * 30000) + 4000);
}
