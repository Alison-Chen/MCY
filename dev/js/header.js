const navSlide = () => {
    const burgerMenu = document.querySelector(".burgerMenu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".burgerMenu p");
    const n = document.querySelector("nav");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        if(burger.className.includes("toggle")){
            menu.textContent = "CLOSE";
            // n.style.backgroundColor = "#fff";
        }else{
            menu.textContent = "MENU";
            // n.style.backgroundColor = "inherit";
        }
    })

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 1}s`;
        }
    })

    document.addEventListener("click",function(e){
        if(!nav.contains(e.target) && !burgerMenu.contains(e.target)){
            nav.classList.remove("nav-active")
            menu.textContent = "MENU"
            burger.classList.remove("toggle")
        }
    })
}

navSlide();


//搜尋吧
const searchBar = document.querySelector("#search");
const displayArea = document.querySelector(".displayArea");
const phoneSearch = document.querySelector(".phoneSearch");
const appendSearch = document.querySelector(".appendSearch");
const phoneBar = document.querySelector("#phoneBar");

fetch("./php/headerSearch.php")
    .then(res => res.json())
    .then(data => {
        const searchFilter = (e) => {
            let userData = e.target.value;
            let emptyArray = [];
            if (userData) {
                emptyArray = data.filter(info => {
                    return info['prod_name'].toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
                });
                emptyArray = emptyArray.map((info) => {
                    return info = `<li>
                                        <a href="./scooterDetail.html" onclick=setId(${info.prod_no})>${info.prod_name}</a>
                                    </li>`
                })
                // console.log(emptyArray);
                displayArea.classList.add("areaShow")
                showSuggestion(emptyArray)
            } else {
                displayArea.classList.remove("areaShow")
            }
        }

        searchBar.addEventListener("keyup", searchFilter)
        phoneBar.addEventListener("keyup", searchFilter)


        setId = function(element){
            sessionStorage.setItem("no", element)
        }
        function showSuggestion(list){
            let listData;
            if(!list.length){
                searchBar.style.display == "block" ? userValue = searchBar.value : userValue = phoneBar.value;
                listData = `<li>未找到相關資訊</li>`
            }else{

                listData = list.join("");
                console.log(listData);
            }

            displayArea.innerHTML = listData
        }
    }).catch(function (err) {
        // 錯誤處理
            console.log(err);
    });

showFilter = (e) => {
    if(e.target !== searchBar || e.target !== appendSearch){
        displayArea.classList.remove("areaShow")
    }else{
        displayArea.classList.toggle("areaShow")    
    }
}

document.addEventListener("click", showFilter)
phoneSearch.addEventListener("click", () => appendSearch.classList.toggle("show"));