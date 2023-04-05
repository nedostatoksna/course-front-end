// firstname
// lastname
// age
// phone
// email
// contact-phone
// contact-email
// contact-post
// adress
// month
// day
// password
// personal-data
// notification

const form = document.querySelector('.form'),
      firstname = document.querySelector('.firstname'),
      lastname = document.querySelector('.lastname'),
   	  age = document.querySelector('.age'),
	  phone = document.querySelector('.phone'),
	  email = document.querySelector('.email'),
	  contactPhone = document.querySelector('.contact-phone'),
	  contactEmail = document.querySelector('.contact-email'),
	  contactPost = document.querySelector('.contact-post'),
	  address = document.querySelector('.address'),
	  addressBox = document.querySelector('.adress-box'),
	  day = document.querySelector('.day'),
	  month = document.querySelector('.month'),
	  password = document.querySelector('.password'),
	  personalData = document.querySelector('.personal-data'),
	  notification = document.querySelector('.notification');

	form.addEventListener('submit', submitHandler);

	const isEmpty = (input) => input.value === '';

	function submitHandler(event) {
		event.preventDefault();
	  	if (isEmpty(firstname) || isEmpty(lastname)) {
	  		console.log('Fill in the name');

	  	} else {
	  		console.log('Форма отправлена');
	  	}
	  }

