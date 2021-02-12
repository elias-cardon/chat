$(document).ready(function(){

	let openConnexion = $('#openConnexion'),
		openSubscription = $('#openSubscription'),
		connexionForm = $('#connexionForm'),
		subscriptionForm = $('#subscriptionForm');

	$('#openConnexion').on('click',function(e){

		event.preventDefault();
		connexionForm.css('display','flex');
		subscriptionForm.css('display','none');

	})

	openSubscription.on('click',function(e){

		event.preventDefault();
		subscriptionForm.css('display','flex');
		connexionForm.css('display','none');

	})

	

	

})