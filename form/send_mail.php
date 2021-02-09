<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$name = $fname." ".$lname;
$fromEmail = "se@sergeiermilov.com";
$email = $_POST['email'];
$comment = $_POST['comment'];
$toEmail = "sergei.m.ermilov@gmail.com";
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$showMessage = '';
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {	
	$subject = "Contact us email";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: '.$fromEmail."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();	
	$message = 'Hello,<br/>'
	. 'Name:' . $name . '<br/>'	
	. 'Message:' . $comment . '<br/>'
	. 'From: ' . $email . '<br/><br/>';		
	mail($toEmail, $subject, $message, $headers);
	$showMessage = "Your Query has been received, I will contact you soon.";	
} else {
	$showMessage =  "invalid email";
}
$jsonData = array(
	"message"	=> $showMessage
);
echo json_encode($jsonData);