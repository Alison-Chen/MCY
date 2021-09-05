new Vue({
    el: "#container",
    data:{
        userName: "",
        admin: [],
        cancelNo: "",
        adname: "",
        adaccount: "",
        adpsw: "",
    },
    methods:{
        showModal(no){
            this.cancelNo = no;
            this.$refs.deleteModal.style.display = "flex";
        },
        showAddModal(){
            this.$refs.addModal.style.display = "flex";
        },
        add(){
            if (this.adname == '' || this.adaccount == '' || adpsw == '') {
                if (this.adname == '') {
                    this.$refs.adname.style.border = "1px solid #2EBFA5";
                }
                if (this.adaccount == '') {
                    this.$refs.adaccount.style.border = "1px solid #2EBFA5";
                }
                if (adpsw == '') {
                    this.$refs.adpsw.style.border = "1px solid #2EBFA5";
                }
            } else {
                let url = "./php/addAdm.php";
                let data = {
                    name: this.adname,
                    account: this.adaccount,
                    password: this.adpsw
                };
                fetch(url, {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.text())
                    .catch(error => console.log(error))
                    .then(body => console.log(body))
                this.$refs.addModal.style.display = "none";
                window.location.reload();
            }
        },
        cancelAddModal(){
            this.$refs.addModal.style.display = "none";
        },
        cancel(){
            this.$refs.deleteModal.style.display = "none";
        },
        drop(){
            let url = "./php/deleteAdm.php";
            let data = {
                no: this.cancelNo,
            };
            fetch(url, {
                method: "post",
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => res.text())
                .catch(error => console.log(error))
                .then(body => console.log(body))
            this.$refs.deleteModal.style.display = "none";
            window.location.reload();
        }
    },
    mounted(){
        let vthis = this;
        const axiosReq1 = axios.get("./php/backend_header.php");
        const axiosReq2 = axios.get("./php/getAdm.php");
        axios.all([axiosReq1, axiosReq2]).then(axios.spread(function (res1, res2) {
            vthis.userName = res1.data[0].name
            vthis.admin = res2.data;
        }));
    },
})