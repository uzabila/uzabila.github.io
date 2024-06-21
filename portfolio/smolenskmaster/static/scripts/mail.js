// $(function() {
jQuery(function ($) {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('text-success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#phone').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('text-success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Сообщение не может быть отправлено.');
			}
		});

	});

});

jQuery(function ($) {

	// Get the form.
	var formTwo = $('#ajax-contact-two');

	// Get the messages div.
	var formMessagesTwo = $('#form-messages-two');

	// Set up an event listener for the contact form.
	$(formTwo).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formDataTwo = $(formTwo).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(formTwo).attr('action'),
			data: formDataTwo
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessagesTwo).removeClass('error');
			$(formMessagesTwo).addClass('text-success');

			// Set the message text.
			$(formMessagesTwo).text(response);

			// Clear the form.
			$('#nameTwo').val('');
			$('#phoneTwo').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessagesTwo).removeClass('text-success');
			$(formMessagesTwo).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessagesTwo).text(data.responseText);
			} else {
				$(formMessagesTwo).text('Сообщение не может быть отправлено.');
			}
		});

	});

});

jQuery(function ($) {

	// Get the form.
	var formThree = $('#ajax-contact-three');

	// Get the messages div.
	var formMessagesThree = $('#form-messages-three');

	// Set up an event listener for the contact form.
	$(formThree).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(formThree).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(formThree).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessagesThree).removeClass('error');
			$(formMessagesThree).addClass('text-success');

			// Set the message text.
			$(formMessagesThree).text(response);

			// Clear the form.
			$('#nameThree').val('');
			$('#phoneThree').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessagesThree).removeClass('text-success');
			$(formMessagesThree).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessagesThree).text(data.responseText);
			} else {
				$(formMessagesThree).text('Сообщение не может быть отправлено.');
			}
		});

	});

});