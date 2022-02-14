const filterBtn = document.getElementById("filter-btn");
const applyFilter = document.getElementById("apply-filter");
const closeFilter = document.getElementById("clear-filter");
const modal = document.querySelector(".modal");

filterBtn.onclick = function(){
    modal.style.display = "block";
}

applyFilter.onclick = function(){
    modal.style.display = "none";
}

closeFilter.onclick = function(){
    modal.style.display = "none";
}

