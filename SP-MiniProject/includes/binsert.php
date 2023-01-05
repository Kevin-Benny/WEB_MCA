<?php

//echo '<pre>';
//print_r($_POST);
//die();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "miniproject";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

		$sid = $_POST['sid'];
		$sname = $_POST['sname'];
		$address = $_POST['address'];
		$pkey = $_POST['pkey'];



	$sql="INSERT INTO sender (sid,sname,address,pkey) VALUES('$sid','$sname','$address','$pkey');";
	$result = mysqli_query($conn,$sql);

	if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
     //echo "Error: " . $sql . "<br>" . $conn->error;
    echo "Success";
}

$conn->close();
?>
