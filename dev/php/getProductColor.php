<?php
try {
	require_once("../../connect.php");
	$sql = "select pc.color_no, pc.color_name, pc.color_pic1, pc.color_pic2, pc.color_pic3, c.color_code
	from product_color pc join color c on pc.color_no = c.color_no
    where pc.prod_no = :id;";

    $number = $pdo->prepare($sql);
    $number->bindValue(":id", $_GET["id"]);

    $number->execute();

    $numberId = $number->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($numberId);

} catch (PDOException $e) {
	echo $e->getMessage();
}
?> 