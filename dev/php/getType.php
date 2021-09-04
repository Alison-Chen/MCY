<?php
try {
	require_once("../../connect.php");
	$sql = "select prod_type, prod_info from product where prod_no = :id";

    $number = $pdo->prepare($sql);
    $number->bindValue(":id", $_GET["id"]);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?> 