// let navTabs = document.querySelector('.nav-tabs');
// let tabs = navTabs.querySelectorAll('.nav-item');
// let sections = document.querySelector('.container');
// // console.log(tabs);

// let tabSwitch = function(event) {
// 	if (event.target.classList.contains('nav-tabs')) {
// 		return false;
// 	}
// 	let target;
// 	if (event.target.classList.contains('nav-link')) {
// 		target = event.target.closest('.nav-item');
// 	} else {
// 		target = event.target;
// 	}
// 	chooseClass(tabs,target,'active'); // смена активного таба
// }

// // функция принимает коллекцию элементов(массив), целевой элемент, класс
// // функция обходит массив, удаляя у всех элементов класс, 
// // функция добавляет целевому элементу класс

// let chooseClass = function(elements, targetElem, classElem) {
// 	elements.forEach(elem => elem.classList.remove(classElem))
// 	targetElem.classList.add(classElem)
// }

// navTabs.addEventListener('click', tabSwitch);


const navTabs = document.querySelector(".nav-tabs"),
      tabs = navTabs.querySelectorAll(".nav-link"),
      sections = document.querySelectorAll(".container");

const tabSwitch = (event) => {
  let tab;
  if (event.target.classList.contains("nav-tabs")) {
    return false;
  } else if (event.target.classList.contains("nav-item")) {
    tab = event.target.querySelector(".nav-link");
  } else {
    tab = event.target;
  }; // could be better

  let section;
  sections.forEach(item => {
    if (item.dataset.tab === tab.dataset.tab)
      section = item;
  });

  chooseClass(tabs, tab, "active");
  chooseClass(sections, section, "d-none", true);
};

/* function gets some elements (array), a target element and a class 
function goes through array removing the class 
function adds the class to the target element */
const chooseClass = (elements, targetElem, classElem, inverse) => {
  if (inverse) {
    elements.forEach(elem => {elem.classList.add(classElem)});
    targetElem.classList.remove(classElem);  
  } else {
    elements.forEach(elem => {elem.classList.remove(classElem)});
    targetElem.classList.add(classElem);
  }
};

navTabs.addEventListener("click", tabSwitch);

