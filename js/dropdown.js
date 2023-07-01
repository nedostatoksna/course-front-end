const burgerBtn = document.querySelector(".burger-btn"),
      dropdownMenu = document.querySelector(".dropdown-background");

let showDropdown = function(event) {
    event.preventDefault();
    if (event.target.classList.contains('burger-btn')) {
        dropdownMenu.style.right = 0;
        dropdownMenu.style.background = "#04040499";
    }
};

let closeDropdown = function(event) {
    if (event.target.classList.contains('close')) {
        dropdownMenu.style.right = "-100%";
    }
};

burgerBtn.addEventListener("click", showDropdown);
dropdownMenu.addEventListener("click", closeDropdown);