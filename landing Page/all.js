import footer from "./scripts/footer.js";

    document.getElementById("footerDiv").innerHTML = footer()


    import corosuel from "./scripts/corousel.js"

    document.getElementById("corosuelDiv").innerHTML = corosuel();


    import homePage from "./scripts/mainPage.js";

    document.getElementById("homePage").innerHTML = homePage();


    let usersData = JSON.parse(localStorage.getItem("AllUserLoginDetails"))
    console.log(usersData)

    import loginPage from "./scripts/loginPage.js";

    document.getElementById("login-page").innerHTML = loginPage();


    document.getElementById('navbarLogin').addEventListener('click',function(){
        document.querySelector("#mainPageModel").style.display = "flex"
    });


    document.querySelector(".close").addEventListener('click',function(){
        document.querySelector("#mainPageModel").style.display = "none"
    });

    document.querySelector(".employerLogin").addEventListener("click",function(){
        document.querySelector("#employerName").style.color = "#007bff"
        document.querySelector(".employerLogin").style.border = "2px solid #007bff"
        document.querySelector(".employerLogin").style.borderLeft = "none"
        document.querySelector(".employerLogin").style.borderRight = "none"
        document.querySelector(".employerLogin").style.borderTop = "none";


        document.querySelector(".studentLogin").style.border = "none";
        document.querySelector("#studentName").style.color = "black";


        document.querySelector(".forOr").style.display = "none";
        document.querySelector(".forGoogle").style.display = "none";

        document.querySelector(".mainContent").style.height = "400px";
        document.querySelector(".inputModel").style.marginTop = "-16%"
    })

    document.querySelector(".studentLogin").addEventListener("click",function(){
        document.querySelector("#studentName").style.color = "#007bff"
        document.querySelector(".studentLogin").style.border = "2px solid #007bff"
        document.querySelector(".studentLogin").style.borderLeft = "none"
        document.querySelector(".studentLogin").style.borderRight = "none"
        document.querySelector(".studentLogin").style.borderTop = "none";


        document.querySelector(".employerLogin").style.border = "none";
        document.querySelector("#employerName").style.color = "black";


        document.querySelector(".forOr").style.display = "flex";
        document.querySelector(".forGoogle").style.display = "flex";

        document.querySelector(".mainContent").style.height = "500px";
        document.querySelector(".inputModel").style.marginTop = "6%"
    })

    document.querySelector("#buttonLogin").addEventListener("click",function(event){
        event.preventDefault()
        let email = document.getElementById("emailLogin").value;

        let passWord = document.getElementById("passwordLogin").value;
        let emailFlag = false;
        let passFlag = false;
        let details = null;
        usersData.map((item)=>{
            if(email==item.email){
                emailFlag = true;
                details = item;
            }
            if(passWord==item.password){
                passFlag = true;
                details = item
            }
        })
        

        if(emailFlag==false && passFlag==true){
            document.getElementById("emailMessage").style.display = "block";

            document.getElementById("emailNameAlert").innerHTML = `<p id="emailNameAlert"><img id="alertImg" src="./images/alert.png">Please enter a valid email address</p>`

        }else if(passFlag==false && emailFlag==true){
            document.getElementById("passMessage").style.display = "block";
            document.getElementById("passNameAlert").innerHTML = `<p id="passNameAlert"><img id="alertImg" src="./images/alert.png">Please enter a valid password</p>`

        }

        if(emailFlag && passFlag){

            localStorage.setItem('singleUserLoginDetails',JSON.stringify(details))

            window.location.href = "afterlogin.html";
        }
        
    })


    document.querySelector(".bangloreCity").addEventListener("click",function(){
        localStorage.setItem('cityName',"banglore");
        console.log("banglore")
        window.location.href= "productPage.html"

    })
    document.querySelector(".delhiCity").addEventListener("click",function(){
        localStorage.setItem('cityName',"delhi");
        window.location.href= "productPage.html";
        console.log("delhi")


    })