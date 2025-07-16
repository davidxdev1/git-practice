// Grab the elements
const title = document.getElementById("mainTitle");
const button = document.getElementById("revealBtn");
const result = document.getElementById("auraResult");

// Add click event to button
button.addEventListener("click", function () {
  title.textContent = "⚡ AURA DETECTED";
  result.textContent = "Your aura is OVER 9000!";
  document.body.style.backgroundColor = "black";
  result.style.color = "violet";
});
