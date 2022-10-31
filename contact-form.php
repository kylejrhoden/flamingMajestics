<?php

if (issset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "flamingmajestics@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an emial from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend"); 
}
