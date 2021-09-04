<?php
session_start();
try {
	require_once("../../connect.php");
	$sql = "select name from administrator where account = '$_SESSION[account]' ";

    $number = $pdo->prepare($sql);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?> 