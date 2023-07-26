//declaring the variables(DOM)
const list = document.querySelectorAll(".list");
const loader = document.getElementById("preloader");



//fx for bottom nav active links
function activeLink() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("click", activeLink));



//preloader fx
window.addEventListener("load", function(){
    loader.style.display = "none";
})



//
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show")
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));