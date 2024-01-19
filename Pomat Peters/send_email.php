<?php
// Set the recipient email address
$to = "awwalmudashir2.0@gmail.com";

// Set the subject of the email
$subject = "Website Contact Form Submission";

// Get the form data from your website (assuming you have a form with fields 'name', 'email', and 'message')
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Build the email body
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message:\n$message";

// Set additional headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Attempt to send the email
$mailSuccess = mail($to, $subject, $body, $headers);

// Check if the email was sent successfully
if ($mailSuccess) {
    echo "Message sent successfully!";
} else {
    echo "Error: Unable to send the message.";
}
?>
