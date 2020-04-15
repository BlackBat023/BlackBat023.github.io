<?php
    
    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg = $_POST["msg"];
    $phone = $_POST["number"];

    $mailTo = "blackbat023@gmail.com";
    $headers = "From: ".$mail;
    $txt = "Query from ".$name."\n".$phone.".\n\n".$msg;

    mail($mailTo, $headers, $txt);
    header("Location: ../index.php?mailsent");
    
?>