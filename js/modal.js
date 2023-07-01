const nav = document.querySelectorAll(".nav"),
      footer = document.querySelectorAll(".footer"),
      dropdownNav = document.querySelectorAll(".dropdown-nav"),
      modal = document.querySelector(".modal-background"),
      closeIcons = document.querySelectorAll(".close"),
      modalTextForDemo = document.querySelector(".modal-demonstration-only"),
      modalTextForExchange = document.querySelector(".modal-transaction"),
      exchange  = document.querySelector(".exchange");

let ShowModal = function(event) {
    event.preventDefault();
    if ((event.target.tagName === "A" || event.target.tagName === "BUTTON") && (!event.target.classList.contains('exchange'))) {
        modal.style.left = 0;
        modalTextForDemo.classList.remove('hidden');
    } else if (event.target.classList.contains('exchange')) {
        modal.style.left = 0;
        modalTextForExchange.classList.remove('hidden');
    }
};

let closeModal = function(event) {
    if (event.target.classList.contains('close')) {
        modal.style.left = "-100%";
    }
    modalTextForDemo.classList.add('hidden');
    modalTextForExchange.classList.add('hidden');
};

nav.forEach(item => item.addEventListener("click", ShowModal));
footer.forEach(item => item.addEventListener("click", ShowModal));
dropdownNav.forEach(item => item.addEventListener("click", ShowModal));
exchange.addEventListener("click", ShowModal);
closeIcons.forEach(item => item.addEventListener("click", closeModal));