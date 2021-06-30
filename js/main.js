const tech = document.getElementsByClassName('tech')
for(let i=0; i<tech.length; i++) {
  tech[i].addEventListener('click',clickHandler)
}
function clickHandler(e) {
e.preventDefault();
document.querySelector('.toggler').checked = false
const href = this.getAttribute("href");
document.querySelector(href).scrollIntoView({
behavior: "smooth"
});



}
