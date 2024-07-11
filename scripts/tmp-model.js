
//PNG MODEL
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


//PDF MODEL
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