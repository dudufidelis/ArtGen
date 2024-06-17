//buttons
const generatePNGButton = document.getElementById("download-png");
const generatePDFButton = document.getElementById('download-pdf');
//Art to generate
const boasVindas = document.getElementById("BoasVindasTV");
const papelPorta = document.getElementById("papelPorta");

//inputs
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
    generatePNGButton.style.display = "block";
    generatePDFButton.style.display = "none";
}

function showPapelPortaInputs() {
    genre.style.display = "none";
    doctorName.style.display = "flex";
    date.style.display = "flex";
    procedure.style.display = "flex";
    foodAllergies.style.display = "flex";
    drugAllergy.style.display = "flex";
    suits.style.display = "flex";
    generatePNGButton.style.display = "none";
    generatePDFButton.style.display = "block";
};

function selectArt() {
    const art = document.getElementById("art").value;
    
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

generatePNGButton.addEventListener('click', function() {
    const inputName = document.getElementById("nameInput").value
    const name = document.getElementById("bv-name");
    const fileName = inputName + '.png';
    const welcomeMsg = document.getElementById("bv-welcome-msg");
    const genre = document.getElementById("genre").value;

    if (genre === "masc") {
        welcomeMsg.textContent = "Seja Bem-Vindo!";
    } else {
        welcomeMsg.textContent = "Seja Bem-Vinda!";
    }

    name.textContent = inputName;

    html2canvas(boasVindas, { scale: 5 }).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var a = document.createElement("a");
        a.setAttribute("href", base64image);
        a.setAttribute("download", fileName);
        a.click();
        a.remove();
    });
});

generatePDFButton.addEventListener('click', function() {
    const inputName = document.getElementById("nameInput").value
    const doctorName = document.querySelector("#doctorName").value;
    const date = document.querySelector("#date").value;
    const procedure = document.querySelector("#procedure").value;
    const foodAllergies = document.querySelector("#foodAllergies").value;
    const drugAllergy = document.querySelector("#drugAllergy").value;
    const suits = document.querySelector("#suits").value;

    const tagName = document.querySelector("#pp-name")
    const tagDoctorName = document.querySelector("#pp-doctor-name");
    const tagDate = document.querySelector("#pp-date");
    const tagProcedure = document.querySelector("#pp-procedure");
    const tagFoodAllergies = document.querySelector("#pp-allergy1");
    const tagDrugAllergy = document.querySelector("#pp-allergy2");
    const tagSuits = document.querySelector("#pp-suit");

    tagName.textContent = inputName;
    tagDoctorName.textContent = doctorName;
    tagDate.textContent = date;
    tagProcedure.textContent = procedure;
    tagFoodAllergies.textContent = foodAllergies;
    tagDrugAllergy.textContent = drugAllergy;
    tagSuits.textContent = suits;
    
    
    const fileName = inputName + '.pdf';
    const opt = {
      filename: fileName,
      image: { type: 'png', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {  
        unit: 'mm',
      //format: [30, 90],
        format: 'a4',
        orientation: 'portrait' 
      }
    };
  
    html2pdf()
      .set(opt)
      .from(papelPorta)
      .save();
  });