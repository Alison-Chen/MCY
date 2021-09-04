<?php
try {
	require_once("../../connect.php");
	$sql = "select * from administrator;";
	
    $number = $pdo->prepare($sql);
	
    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?>