<?php
    $name = $_POST['name'];

    $number = $_POST['number'];

    $visitor_email = $_POST['email'];

    $message = $_POST['message'];

    $email_from = ' '; 

    $email_body = "User Name: $name.\n". 
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    

    $headers = "From: " .$name. "<" .$visitor_email. ">\r\n";

    $to = "flamingmajestics@gmail.com"; 
    
    $headers .= "Reply-To $visitor_email \r\n";

    mail($to, $email_body, $message, $headers)
    or die("Error!");

    

    header("contact.html");


?>