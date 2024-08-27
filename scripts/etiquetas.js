//W and H used in format jsPDF according to selected label
let width = 100;
let height = 40;
// 85, 20 to label
// 205, 45 to Bracelet

let selectOpt = document.querySelector("#labelOpt").addEventListener("change", () => {
    let selectedOpt = document.querySelector("#labelOpt").value;
    switch (selectedOpt) {
        case "bracelet":
            showSelectedOpt("bracelet")
            break
        case "label":
            showSelectedOpt("label")
            break
        case "companion":
            showSelectedOpt("companion")
            break
    }
})

function showSelectedOpt(selected) {
    //config area
    const braceletOpt = document.querySelector(".braceletOpt");
    const labelOpt = document.querySelector(".labelOpt");
    const companionOpt = document.querySelector(".companionOpt");
    //Previews
    const previewBracelet = document.querySelector(".previewBracelet")
    const previewLabel = document.querySelector(".previewLabel")
    const previewCompanion = document.querySelector(".previewCompanion")
    
    if (selected === "bracelet") {
        //add notSelected
        labelOpt.classList.add("notSelected");
        companionOpt.classList.add("notSelected");
        previewLabel.classList.add("notSelected");
        previewCompanion.classList.add("notSelected");
        //remove notSelected (Show to client)
        braceletOpt.classList.remove("notSelected");
        previewBracelet.classList.remove("notSelected");
    }
    else if (selected === "label") {
        //add notSelected
        companionOpt.classList.add("notSelected");
        previewCompanion.classList.add("notSelected");
        braceletOpt.classList.add("notSelected");
        previewBracelet.classList.add("notSelected");
        //remove notSelected (Show to client)
        previewLabel.classList.remove("notSelected");
        labelOpt.classList.remove("notSelected");
    }
    else {
        //add notSelected
        labelOpt.classList.add("notSelected");
        previewLabel.classList.add("notSelected");
        braceletOpt.classList.add("notSelected");
        previewBracelet.classList.add("notSelected");
        //remove notSelected (Show to client)
        companionOpt.classList.remove("notSelected");
        previewCompanion.classList.remove("notSelected");
    }
}

function getInputValues() {
    //const nameInput = document.querySelector("#nameInput").value;
   // const birthDate = document.querySelector("#birthDate").value;
   // const procedure = document.querySelector("#procedure").value;
   // const allergies = document.querySelector("#allergies").value;
   // const doctorName = document.querySelector("#doctorName").value;

    //label inputs
    const l_nameInput = document.querySelector("#l-nameInput").value;
    const l_birthDate = document.querySelector("#l-birthDate").value;
    const l_procedure = document.querySelector("#l-procedure").value;
    const l_doctorName = document.querySelector("#l-doctorName").value;
    const l_foodAllergies = document.querySelector("#l-foodAllergies").value;
    const l_drugAllergy = document.querySelector("#l-drugAllergy").value;

    //return { nameInput, birthDate, procedure, allergies, doctorName }
    return {l_nameInput, l_birthDate, l_procedure, l_doctorName, l_foodAllergies, l_drugAllergy };
}

function updatePreviewDisplay(inputValues) {
    //const ppName = document.querySelector("#pp-name");
   // const ppBirthDate = document.querySelector("#pp-birthDate");
   // const ppProcedure = document.querySelector("#pp-procedure");
   // const ppAllergies = document.querySelector("#pp-allergies");
   // const ppDoctorName = document.querySelector("#pp-doctor-name");
   // const ppFoodAllergy = document.querySelector("#pp-foodAllergies");
   // const ppDrugAllergy = document.querySelector("#pp-drugAllergies");
   // const ppNameCompanion = document.querySelector("#pp-name-companion");

    //ppName.textContent = inputValues.nameInput;
   // ppBirthDate.textContent = inputValues.birthDate;
    //ppProcedure.textContent = inputValues.procedure;
   // ppAllergies.textContent = inputValues.allergies;
   // ppDoctorName.textContent = inputValues.doctorName;
   // ppFoodAllergy.textContent = inputValues.foodAllergies
   // ppDrugAllergy.textContent = inputValues.drugAllergy
    //ppNameCompanion.textContent = inputValues.companionName
//
    //Label preview

    const lName = document.querySelector("#l-name");
    const lBirthDate = document.querySelector("#l-birthDate");
    const lDoctorName = document.querySelector("#l-doctor-name");
    const lFoodAllergy = document.querySelector("#l-foodAllergies");
    const lDrugAllergy = document.querySelector("#l-drugAllergies");
    const lProcedure = document.querySelector("#l-procedure");

    lName.textContent = inputValues.l_nameInput;
    lBirthDate.textContent = inputValues.l_birthDate;
    lDoctorName.textContent = inputValues.l_doctorName;
    lFoodAllergy.textContent = inputValues.l_foodAllergies;
    lDrugAllergy.textContent = inputValues.l_drugAllergy;
    lProcedure.textContent = inputValues.l_procedure;

    //return [ ppName, ppBirthDate, ppProcedure, ppAllergies, ppDoctorName, ppFoodAllergy, ppDrugAllergy ]
    return [ lName, lBirthDate, lDoctorName, lFoodAllergy, lDrugAllergy, lProcedure ];
}


document.getElementById("download-pdf").addEventListener("click", function () {
    const art = document.getElementById("label");

    const inputValues = getInputValues();
    updatePreviewDisplay(inputValues);


    const fileName = inputValues.nameInput + ".pdf";
    const opt = {
        filename: fileName,
        image: { type: "pdf", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "mm",
            orientation: "landscape",
            format: [width, height]
        },
    };

    html2pdf().set(opt).from(art).save();
});
