function getInputValues() {
    const inputName = document.getElementById("nameInput").value;
    const doctorName = document.querySelector("#doctorName").value;
    const date = document.querySelector("#date").value;
    const dateParts = date.split("-");
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    const procedure = document.querySelector("#procedure").value;
    const foodAllergies = document.querySelector("#foodAllergies").value;
    const drugAllergy = document.querySelector("#drugAllergy").value;
    const suits = document.querySelector("#suits").value;

    return { inputName, doctorName, formattedDate, procedure, foodAllergies, drugAllergy, suits };
}

function checkInputLength(input) {
    if (input.length > 35) {
        document.querySelector("#pp-procedure").style.fontSize = "1.2rem"
        document.querySelector("#pp-procedure").style.fontWeight = "600"
    } else {
        document.querySelector("#pp-procedure").style.fontSize = "2rem"
        document.querySelector("#pp-procedure").style.fontWeight = "200"
    }
}

function toggleSuitsVisibility(suits) {
    const previewSuits = document.querySelector(".suitsArea");

    if (suits == "") {
        previewSuits.style.display = "none";
    } else {
        previewSuits.style.display = "block";
    }
}

function setUppercase(textPreview) {
    textPreview.forEach(textPreview => {
        textPreview.style.textTransform = "uppercase";
    });
}

function updatePreviewDisplay(inputValues) {
    const tagName = document.querySelector("#pp-name");
    const tagDoctorName = document.querySelector("#pp-doctor-name");
    const tagDate = document.querySelector("#pp-date");
    const tagProcedure = document.querySelector("#pp-procedure");
    const tagFoodAllergies = document.querySelector("#pp-allergy1");
    const tagDrugAllergy = document.querySelector("#pp-allergy2");
    const tagSuits = document.querySelector("#pp-suit");

    tagName.textContent = inputValues.inputName;
    tagDoctorName.textContent = inputValues.doctorName;
    tagDate.textContent = inputValues.formattedDate;
    tagProcedure.textContent = inputValues.procedure;
    tagFoodAllergies.textContent = inputValues.foodAllergies;
    tagDrugAllergy.textContent = inputValues.drugAllergy;
    tagSuits.textContent = inputValues.suits;

    return [tagName, tagDoctorName, tagDate, tagProcedure, tagFoodAllergies, tagDrugAllergy, tagSuits]
    
}

document.getElementById("download-pdf").addEventListener("click", function () {
    const papelPorta = document.getElementById("papelPorta");

    const inputValues = getInputValues();
    const textPreview = updatePreviewDisplay(inputValues)
    checkInputLength(inputValues.procedure)
    setUppercase(textPreview)
    toggleSuitsVisibility(inputValues.suits);
    updatePreviewDisplay(inputValues);

    const fileName = inputValues.inputName + ".pdf";
    const opt = {
        filename: fileName,
        image: { type: "png", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
        },
    };

    html2pdf().set(opt).from(papelPorta).save();
});
