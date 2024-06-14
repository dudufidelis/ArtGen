const genre = document.querySelector(".genre");
const doctorName = document.querySelector(".doctorName");
const date = document.querySelector(".date");
const procedure = document.querySelector(".procedure");
const foodAllergies = document.querySelector(".foodAllergies");
const drugAllergy = document.querySelector(".drugAllergy");
const suits = document.querySelector(".suits");


function showBoasVindasInputs() {
    genre.style.display = "flex";
    doctorName.style.display = "none";
    date.style.display = "none";
    procedure.style.display = "none";
    foodAllergies.style.display = "none";
    drugAllergy.style.display = "none";
    suits.style.display = "none";
}

function showPapelPortaInputs() {
    genre.style.display = "none";
    doctorName.style.display = "flex";
    date.style.display = "flex";
    procedure.style.display = "flex";
    foodAllergies.style.display = "flex";
    drugAllergy.style.display = "flex";
    suits.style.display = "flex";
};

function selectArt() {
    const art = document.getElementById("art").value;

    const boasVindas = document.getElementById("BoasVindasTV");
    const papelPorta = document.getElementById("papelPorta");

    if (art === "boasVindas") {
        boasVindas.style.display = "flex";
        papelPorta.style.display = "none";
        
        showBoasVindasInputs();

    } else {
        boasVindas.style.display = "none";
        papelPorta.style.display = "flex";

        showPapelPortaInputs();
    }
};

document.getElementById("download-btn").onclick = function () {
    const screenshotTarget = document.getElementById("BoasVindasTV");
    const inputName = document.getElementById("nameInput").value;
    const name = document.getElementById("bv-name");
    const fileName = inputName + '.png';
    const genre = document.getElementById("genre").value;
    const welcomeMsg = document.getElementById("bv-welcome-msg");

    if (genre === "masc") {
        welcomeMsg.textContent = "Seja Bem-Vindo!";
    } else {
        welcomeMsg.textContent = "Seja Bem-Vinda!";
    }
    name.textContent = inputName;

    html2canvas(screenshotTarget, { scale: 10 }).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var a = document.createElement("a");
        a.setAttribute("href", base64image);
        a.setAttribute("download", fileName);
        a.click();
        a.remove();
    });
};