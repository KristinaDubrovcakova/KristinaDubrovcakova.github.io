<?php
$servername = "edudb-02.nameserver.sk";
$username = "kristinadubrovc1";
$password = "Kikuska2006";
$dbname = "kristinadubrovc1";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Pripojenie k databáze zlyhalo: " . mysqli_connect_error());
}


mysqli_set_charset($conn, "utf8mb4");

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];

$first_name= htmlspecialchars($first_name);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($message);


$sql = "INSERT INTO maciatko (meno, priezvisko, email, sprava) VALUES ('$first_name', '$last_name', '$email', '$message')";

if (mysqli_query($conn, $sql)) {

    $to = "dub@kristinadubrovcakova.studenthosting.sk";
    $subject = "Nový komentár";
    $message = "Meno: $first_name\nPriezvisko: $last_name\nEmail: $email\nSpráva: $message";
    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    mail($to, $subject, $message, $headers);

    echo "<script>alert('Komentár bol úspešne uložený a poslaný na email.');</script>";
} else {
    echo "<script>alert('Chyba: " . mysqli_error($conn) . "');</script>";
}

mysqli_close($conn);


header("Location: index.html");
exit();
