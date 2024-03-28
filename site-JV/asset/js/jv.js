/* -------------- menu déroulant ---------------*/

/*function menuDeroulant(id)
{
    var element = document.getElementById(id);
    var etat = element.style.display;
     
    if (etat == none)
        element.style.display = 'block';
    else
        element.style.display = 'none';
}*/



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

/*javascript :                     //-------1 carousel---------//*/
let angle =0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }

spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}