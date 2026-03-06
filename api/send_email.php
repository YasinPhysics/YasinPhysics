<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // PHPMailer + Dotenv

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $mail = new PHPMailer(true);

  try {
    // SMTP সেটিংস
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME']; // .env থেকে নেবে
    $mail->Password = $_ENV['SMTP_PASSWORD']; // .env থেকে নেবে
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // সেন্ডার + রিসিভার
    $mail->setFrom($email, $name);
    $mail->addAddress('[your.email@example.com]', 'Mohammad Yasin');

    // কনটেন্ট
    $mail->isHTML(true);
    $mail->Subject = 'New Message from Website';
    $mail->Body = "<p><strong>Name:</strong> $name</p><p><strong>Email:</strong> $email</p><p><strong>Message:</strong> $message</p>";

    $mail->send();
    echo 'Message sent successfully!';
  } catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
  }
} else {
  echo 'Invalid request.';
}
