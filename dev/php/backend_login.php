<?php
session_start();

try{
  require_once('../../connect.php');
  $sql = "select * from administrator where account = :account and password = :password"; 

  $member = $pdo->prepare($sql);
  $member->bindValue(":account", $_POST["account"]);
  $member->bindValue(":password", $_POST["password"]);
  $member->execute();

  if( $member->rowCount() == 0 ){ //查無此人
      echo null;
    }else{
        //  echo "<script>alert('請輸入正確的帳號密碼')</script>";
  //  echo "<script>window.history.back()</script>";
      $admRow = $member->fetch(PDO::FETCH_ASSOC);
      $_SESSION['account'] = $admRow['account'];
      $_SESSION['password'] = $admRow['password'];
    // print_r($admRow);

    //送出登入者的姓名資料
      // $res = ["email"=>$admRow["email"], "mem_psw"=>$admRow["mem_psw"], "mem_no" => $admRow['mem_no'] ];

      echo json_encode($admRow); //輸出json
    }
  }catch(PDOException $e){
  echo $e->getMessage();
}

?>