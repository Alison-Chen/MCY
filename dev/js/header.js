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

fetch("./php/headerSearch.php")
    .then(res => res.json())
    .then(data => {
        searchBar.addEventListener("keyup", (e) => {
            let userData = e.target.value;
            let emptyArray = [];
            if(userData){
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
            }else{
                displayArea.classList.remove("areaShow")
            }
        })

        setId = function(element){
            sessionStorage.setItem("no", element)
        }
        function showSuggestion(list){
            let listData;
            if(!list.length){
                userValue = searchBar.value;
                listData = `<li>未找到相關資訊</li>`
            }else{
                // listData == list;
                listData = list.join("");
                console.log(listData);
            }
            // list.map(li => {
            //     console.log(li);
            //     let element = document.createElement("li")
            //     element.innerText = li;
            //     displayArea.appendChild(element)
            // })
            displayArea.innerHTML = listData
        }
    }).catch(function (err) {
        // 錯誤處理
            console.log(err);
    });

showFilter = (e) => {
    if(e.target !== searchBar){
        displayArea.classList.remove("areaShow")
    }else{
        displayArea.classList.toggle("areaShow")    
    }
}

document.addEventListener("click", showFilter)