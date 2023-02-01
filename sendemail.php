<?php
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "SamXavia@PlayProfile.net";
  $subject = "Contact form submission from $name";
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  mail($to, $subject, $message, $headers);
  header("Location: http://your-website.com/contact-confirmation.html");
  exit;
?>
