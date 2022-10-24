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

    echo'
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flaming Majestics Baseball</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link rel="shortcut icon" href="images/redLogoIcon.png" type="image/x-icon">
    </head>
    <body>
        <div class="heroContact">
            <div class="nav-bar">
                <div class="nav-logo">
                    <a href="index.html"><img src="images/redLogo.png"></a>
                </div>
                <div class="nav-links" id="nav-links">
                <i class="bi bi-x" onclick="closeMenu()"></i>
                    <ul>
                        <a href="index.html"><li>Home</li></a>
                        <a href="roster.html"><li>Roster</li></a>
                        <a href="media.html"><li>Media</li></a>
                        <a href="about.html"><li>About</li></a>
                        <a href="contact.html"><li>Contact</li></a>
                    </ul>
                    <button type="button" class="btn">Stay In The Loop</button>
                </div>
                <i class="bi bi-list" onclick="showMenu()"></i>
            </div>
    
    
            <div class="vertical-bar">
                <div class="trophy-icon">
                    <i class="bi bi-trophy"></i>
                </div>
    
                <div class="donate-icon">
                    <a href="https://www.paypal.com/pools/c/8NNfP3ocE1" target="_blank"><i class="bi bi-cash-coin"></i></a>
                </div>
                <div class="social-icons">
                    <i class="bi bi-facebook"></i>
                    <a  href="https://www.instagram.com/flaming_majestics/" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="https://open.spotify.com/playlist/5tjKs5BP6wwAousKXqlfGf?si=2dd2827d9b654642" target="_blank"><i class="bi bi-spotify"></i></a>
                </div>
            </div>
            
                <h2>Message Sent!</h2>
                    
    
            <footer class="footer">
                <p>
                    &copy;  <script>document.write(new Date().getFullYear());</script>  | Flaming Majestics
                </p>
            </footer>
        </div>
        <script>
            var show = document.getElementById("nav-links");
            function showMenu() {
                show.style.right = "0";
            }
            function closeMenu() {
                show.style.right = "-200px";
            }
        </script>
    </body>
    </html>

    ';

?>