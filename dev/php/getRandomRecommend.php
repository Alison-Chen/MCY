<?php
try {
	require_once("../../connect.php");
	$sql = "select prod_no, prod_name, prod_price, product_pic, prod_type from product
			where prod_no != :id && prod_status = 1
			order by rand() limit 3;";

    $number = $pdo->prepare($sql);
    $number->bindValue(":id", $_GET["id"]);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?> 