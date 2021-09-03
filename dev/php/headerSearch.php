<?php
try {
	require_once("../../connect.php");
	$sql = "select prod_no, prod_name from product where prod_status = 1";

    $number = $pdo->prepare($sql);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?> 