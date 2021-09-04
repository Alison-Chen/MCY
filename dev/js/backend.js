new Vue({
    el: "main",
    data:{
        account: "",
        password: "",
    },
    methods:{
        checkValue(){
            let account = this.$refs.account;
            let mintAccount = this.$refs.mintAccount;
            let password = this.$refs.password;
            let mintPassword = this.$refs.mintPassword;
            if(account.value == ""){
                account.style.border = "2px solid #2EBFA5";
                mintAccount.style.opacity = 1;
            }else{
                account.style.border = "none";
                mintAccount.style.opacity = 0;
            }
            if (password.value == "") {
                password.style.border = "2px solid #2EBFA5";
                mintPassword.style.opacity = 1;
            } else {
                password.style.border = "none";
                mintPassword.style.opacity = 0;
            }

            if(account.value && password.value) return this.getAmd();
        },
        getAmd(){
            let account = this.account;
            let password = this.password;
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status == 200) {
                    // alert(JSON.parse(JSON.stringify(xhr.responseText)));
                    var admRow = JSON.parse(JSON.stringify(xhr.responseText));
                    if (admRow == "") {
                        alert('帳密錯誤')
                    } else {
                        location.href = "./admMGT.html";
                    }
                } else {
                    alert(xhr.status);
                }
            }
            var url = "./php/backend_login.php";
            xhr.open("Post", url, true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let data_info = `account=${account}&password=${password}`;
            xhr.send(data_info);
        },
        logIn(){
            this.checkValue();
        }
    }
})