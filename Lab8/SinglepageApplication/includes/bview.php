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

		$quest = $_POST['quest'];



 $sql = $quest;
 $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo "sender_id: " . $row["sid"]. " &nbsp;&nbsp;&nbsp; sender_name: " . $row["sname"] . " &nbsp;&nbsp;&nbsp; address: " . $row["address"]. " &nbsp;&nbsp;&nbsp; private_key: ". $row["pkey"] ."<br>";
//     }
// } else {
//     echo "0 results";
// }


// 		if (!$result)
// {
// // $message = 'ERROR:' . mysql_error();
// // return $message;
// }
// else
// {
// $i = 0;
// echo '<html><body><table border=1><tr>';
// while ($i < mysqli_num_fields($result))
// {
// $meta = mysqli_fetch_field($result);
// echo '<td>' . $meta->name . '</td>';
// $i = $i + 1;
// }
// echo '</tr>';
// $i = 0;
// while ($row = mysqli_fetch_row($result))
// {
// echo '<tr>';
// $count = count($row);
// $y = 0;
// while ($y < $count)
// {
// $c_row = current($row);
// echo '<td>' . $c_row . '</td>';
// next($row);
// $y = $y + 1;
// }
// echo '</tr>';
// $i = $i + 1;
// }
// echo '</table></body></html>';
// mysqli_free_result($result);
// }

echo "Views created Successfully";

$conn->close();
?>

