<?php
try {
	require_once("../../connect.php");
    $receive_data = json_decode(trim(file_get_contents("php://input")));

    $name = $receive_data->name;
    $account = $receive_data->account;
    $psw = $receive_data->password;

	$sql = "INSERT INTO `administrator` (`ad_no`, `name`, `account`, `password`) VALUES ('', '$name', '$account', '$psw');";

    $number = $pdo->prepare($sql);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>