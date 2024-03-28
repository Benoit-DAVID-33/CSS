const darkmode_toggle = document.getElementById("darkmode_toggle");
const body = document.body;

/*btn2.addEventListener("click", changeColor)*/
darkmode_toggle.addEventListener("click", changeColor2);
function changeColor2(){
    
    body.classList.toggle("dark");
    navDark.classList.toggle("black");
    btnColor.classList.toggle("whiteBis")
    btnColor2.classList.toggle("whiteBis")
    btnColor3.classList.toggle("whiteBis")
    btnColor4.classList.toggle("whiteBis")
    btnColor5.classList.toggle("whiteBis")
    btnColor6.classList.toggle("whiteBis")
};
