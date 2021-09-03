<?php
try {
    
    require_once("../../connect.php");
    $sql = "select p.prod_no, p.prod_type, p.prod_name, p.prod_ondate, p.product_pic, c.color_code 
                from product_color pc join product p on pc.prod_no = p.prod_no
                join color c on pc.color_no = c.color_no
                where prod_status = 1
                group by p.prod_no;";
    $productAll = $pdo->prepare($sql);

    $productAll->execute();


    if( $productAll->rowCount() == 0 ){
        echo "{}";
    }else{
        $productRow = $productAll->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($productRow);
    }

}catch (PDOException $e) {

    echo $e->getMessage(), "<br>";
    echo $e->getLine(), "<br>";

}
?>