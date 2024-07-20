const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");

  // Add additional functionality here
  if (showcase.classList.contains("active")) {
    // If showcase is active, do something
    console.log("Showcase is active");
  } else {
    // If showcase is not active, do something else
    console.log("Showcase is not active");
  }
});