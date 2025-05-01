const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function cliqueinobotao() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}   

function cliqueinamascara(){
    form.style.left = "-300px"
    form.style.transform = "translatex (0)"
    mascara.style.visibility = "hidden"
}

