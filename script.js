const button = document.getElementById('actionBtn');

button.addEventListener('click', () => {
  if (button.textContent === "Click Me!") {
    button.textContent = "Thanks for clicking!";
  } else {
    button.textContent = "Click Me!";
  }
});
