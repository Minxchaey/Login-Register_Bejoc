<html>
<body style='background-image:url("gift.gif"); background-repeat:no-repeat; background-size:cover; color:yellow; font-size:28px;text-align:center;'>



<?php $firstname = $lastname = $address = $email = $password = ""; if ($_SERVER["REQUEST_METHOD"] == "POST") { $firstname = validate_input($_POST['firstname']); $lastname = validate_input($_POST['lastname']); $address = validate_input($_POST['address']); $email = validate_input($_POST['email']); $password = validate_input($_POST['password']); } 


function validate_input($data) {
     $data = trim($data); $data = stripslashes($data); $data = htmlspecialchars($data); return $data; } 
     echo "<h1>Welcome my friend!</h1>";

     echo "Firstname: $firstname<br>";
     echo "Lastname: $lastname<br>";
     echo "Address: $address<br>";
     echo "Email Address: $email<br>";
     echo "Password: $password<br>";
     
     ?> 




</body>
</html>
