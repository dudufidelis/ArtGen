const generatePDFButton = document.getElementById("download-pdf");
const papelPorta = document.getElementById("papelPorta");

generatePDFButton.addEventListener('click', function() {
    const inputName = document.getElementById("nameInput").value
    const doctorName = document.querySelector("#doctorName").value;
    const date = document.querySelector("#date").value;
    const dateParts = date.split("-");
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    const procedure = document.querySelector("#procedure").value;
    const foodAllergies = document.querySelector("#foodAllergies").value;
    const drugAllergy = document.querySelector("#drugAllergy").value;
    const suits = document.querySelector("#suits").value;
    const previewSuits = document.querySelector(".suitsArea");

    if (suits == "") {
      previewSuits.style.display = "none"
    } else {
      previewSuits.style.display = "block"
    }

    const tagName = document.querySelector("#pp-name")
    const tagDoctorName = document.querySelector("#pp-doctor-name");
    const tagDate = document.querySelector("#pp-date");
    const tagProcedure = document.querySelector("#pp-procedure");
    const tagFoodAllergies = document.querySelector("#pp-allergy1");
    const tagDrugAllergy = document.querySelector("#pp-allergy2");
    const tagSuits = document.querySelector("#pp-suit");

    tagName.textContent = inputName;
    tagDoctorName.textContent = doctorName;
    tagDate.textContent = formattedDate;
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