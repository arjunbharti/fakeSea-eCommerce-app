const burger = document.getElementById("burger-section");
const openBurger = document.querySelector(".open-burger");
const closeBurger = document.querySelector(".close-burger");

openBurger.onclick = function(){
    burger.style.display = "block";
}

closeBurger.onclick = function(){
    burger.style.display = "none";
}
