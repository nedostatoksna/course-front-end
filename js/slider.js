const radioButtons = document.querySelectorAll('.slider-radio'),
	  radioButtonsGroup = document.querySelector('.radio-group-container'),
	  film = document.querySelector('.film'),
	  sliderButtons = document.querySelectorAll('.slider-btn');

radioButtonsGroup.addEventListener('change', switchSlideByRadio);
sliderButtons.forEach(item => item.addEventListener('click', switchSlideByBtn));
 
let idArray = [];
radioButtons.forEach(item => idArray.push(item.id));

let activeRadio; 
let activeRadioId;

function switchSlideByRadio(event) {
	if (event.target.classList.contains('slider-radio')) {
		activeRadioid = event.target.id;
		film.style.left = `${activeRadioid * -600}px`;
	}
}

function switchSlideByBtn(event) {
	if (event.target.classList.contains('next')) {
		findActiveRadio();
		if (Number(activeRadioId) < (idArray.length - 1)) {
			activeRadioId = Number(activeRadioId) + 1;
			MoveFilm();
		} else if (Number(activeRadioId) === (idArray.length - 1)) {
			activeRadioId = 0;
			MoveFilm();
		}
	} else if (event.target.classList.contains('prev')) {
		findActiveRadio();
		if (Number(activeRadioId) > 0) {
			activeRadioId = Number(activeRadioId) - 1;
			MoveFilm();
		} else if (Number(activeRadioId) === 0) {
			activeRadioId = idArray.length - 1;
			MoveFilm();
		}
	}	
}

function MoveFilm() {
	film.style.left = `${activeRadioId * -600}px`;
	ChangeRadio();
}

function ChangeRadio() {
	radioButtons.forEach(item => item.removeAttribute('checked'));
	radioButtons.forEach(item => {
		if (Number(item.id) === activeRadioId) {
			console.log(item);
			console.log(item.checked);
			item.checked = 'true';
		}
	});
}

function findActiveRadio() {
	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			activeRadio = radioButtons[i];
			activeRadioId = activeRadio.id;
		}
	}
	return activeRadio;
}
