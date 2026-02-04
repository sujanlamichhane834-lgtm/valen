let yesSize = 1;
let noSize = 1;

const messages = [
  "Are you sure? 😏",
  "Think again Pakku 🌷",
  "My heart is waiting 💜",
  "Okay last chance 😌"
];

function yesClick() {
  window.location.href = "rose.html";
}

function noClick() {
  yesSize += 0.2;
  noSize -= 0.1;

  document.getElementById("yesBtn").style.transform = `scale(${yesSize})`;
  document.getElementById("noBtn").style.transform = `scale(${noSize})`;

  document.getElementById("msg").innerText =
    messages[Math.floor(Math.random() * messages.length)];
}
