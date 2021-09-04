<?php
try {
	require_once("../../connect.php");
    $receive_data = json_decode(trim(file_get_contents("php://input")));

    $ad_no = $receive_data->no;

	$sql = "delete from administrator where ad_no = $ad_no";

    $number = $pdo->prepare($sql);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>