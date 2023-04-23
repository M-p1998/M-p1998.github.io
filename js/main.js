

// nav sticky bar
window.addEventListener("scroll",function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0)
}); 



// Toggle menu

const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector("nav");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  nav.classList.toggle("active");
});











