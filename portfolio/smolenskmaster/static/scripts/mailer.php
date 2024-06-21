<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

	if (empty($_POST)) {
	   echo "<h1>Error</h1>\n
	      <p>Accessing this page directly is not allowed.</p>";
	   exit;
	}

	$phone = preg_replace("([\r\n])", "", $phone);

	$find = "/(content-type|bcc:|cc:)/i";
	if (preg_match($find, $name) || preg_match($find, $phone)) {
	   echo "<h1>Error</h1>\n
	      <p>No meta/header injections, please.</p>";
	   exit;
	}

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = trim($_POST["name"]);
        $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_NUMBER_INT);

        $city = $_POST["city"];
        $title = $_POST["title"];
        $domain = $_POST["domain"];
        $position = $_POST["position"];

        // Check that data was sent to the mailer.
        if ( empty($phone) ) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Ошибка! Заполните форму и отправьте снова.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $sender = "no-reply@smolenskmaster.ru";
        $recipient = "smolenskmaster@yandex.ru";

        // Set the email subject.
        $subject = "Новая заявка на smolenskmaster.ru";

        // Build the email content.
        $email_content = "Имя: $name.<br>Телефон: $phone.<br><hr><br>Город: $city.<br>Название: $title.<br>Сайт: $domain.<br>Позиция в лендинге: $position.";

        // Build the email headers.
		$email_headers = "FROM: " . $sender . "\r\n";
        $headers .= "Return-Path: info@digapp.ru" . "\r\n";
        $email_headers .= "MIME-Version: 1.0" . "\r\n";
        $email_headers .= "Reply-To: info@digapp.ru" . "\r\n";
        $email_headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
		$email_headers .= "Content-type:text/html;charset=utf-8" . "\r\n";
		

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Спасибо! Заявка принята.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Ошибка! Что-то пошло не так.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Возникла техническая проблема, попробуйте позже.";
    }

?>
