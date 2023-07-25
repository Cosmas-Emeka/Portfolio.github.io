const list = document.querySelectorAll(".list");
const loader = document.getElementById("preloader");

function activeLink() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("click", activeLink));


//
window.addEventListener("load", function(){
    loader.style.display = "none";
})