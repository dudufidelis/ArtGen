let SelectOpt = document.querySelector("#labelOpt").addEventListener("change", () => {
    let selectedOpt = document.querySelector("#labelOpt").value;
    switch (selectedOpt) {
        case "bracelet":
            showSelectedOpt("bracelet");
            break;
        case "label":
            showSelectedOpt("label");
            break;
        case "companion":
            showSelectedOpt("companion");
            break;
    }
});

function showSelectedOpt(selected) {
    //config area
    const braceletOpt = document.querySelector(".braceletOpt");
    const labelOpt = document.querySelector(".labelOpt");
    const companionOpt = document.querySelector(".companionOpt");
    //Previews
    const previewBracelet = document.querySelector(".previewBracelet");
    const previewLabel = document.querySelector(".previewLabel");
    const previewCompanion = document.querySelector(".previewCompanion");

    if (selected === "bracelet") {
        //add notSelected
        labelOpt.classList.add("notSelected");
        companionOpt.classList.add("notSelected");
        previewLabel.classList.add("notSelected");
        previewCompanion.classList.add("notSelected");
        //remove notSelected (Show to client)
        braceletOpt.classList.remove("notSelected");
        previewBracelet.classList.remove("notSelected");
    } else if (selected === "label") {
        //add notSelected
        companionOpt.classList.add("notSelected");
        previewCompanion.classList.add("notSelected");
        braceletOpt.classList.add("notSelected");
        previewBracelet.classList.add("notSelected");
        //remove notSelected (Show to client)
        previewLabel.classList.remove("notSelected");
        labelOpt.classList.remove("notSelected");
    } else {
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
    //Bracelet inputs
    const nameInput = document.querySelector("#nameInput").value;
    const birthDate = document.querySelector("#birthDate").value;
    const procedure = document.querySelector("#procedure").value;
    const allergy = document.querySelector("#allergy").value;
    const doctorName = document.querySelector("#doctorName").value;
    //label inputs
    const l_nameInput = document.querySelector("#l-nameInput").value;
    const l_birthDate = document.querySelector("#l-birth").value;
    const l_procedure = document.querySelector("#l-proceeding").value;
    const l_doctorName = document.querySelector("#l-doctorName").value;
    const l_foodAllergies = document.querySelector("#l-foodAllergy").value;
    const l_drugAllergy = document.querySelector("#l-drugAllergy").value;
    //Companion inputs
    const patientInput = document.querySelector("#patientInput").value;
    const companionInput = document.querySelector("#companionInput").value;

    //Check if inpout lenght will break the design
    if (l_procedure.lenght || l_foodAllergies || l_drugAllergy) {

    }


    return {
        nameInput,
        birthDate,
        procedure,
        allergy,
        doctorName,
        nameInput,
        l_nameInput,
        l_birthDate,
        l_procedure,
        l_doctorName,
        l_foodAllergies,
        l_drugAllergy,
        patientInput,
        companionInput,
    };
}

function checkInputLength(input) {
    if (input.l_procedure.length >= 30 ||
        input.l_drugAllergy.length >= 30 ||
        input.l_foodAllergies.length >= 30) {
        document.querySelector("#l-procedure").style.fontSize = ".8rem"
        document.querySelector("#l-foodAllergies").style.fontSize = ".8rem"
        document.querySelector("#l-drugAllergies").style.fontSize = ".8rem"
    } else {
        document.querySelector("#l-procedure").style.fontSize = "1.2rem"
        document.querySelector("#l-foodAllergies").style.fontSize = "1.2rem"
        document.querySelector("#l-drugAllergies").style.fontSize = "1.2rem"
    }
}

function updatePreviewDisplay(inputValues) {
    let opt = "";
    let selectedOpt = document.querySelector("#labelOpt").value;

    switch (selectedOpt) {
        case "bracelet":
            showSelectedOpt("bracelet");
            opt = "bracelet";
            break;
        case "label":
            showSelectedOpt("label");
            opt = "label";
            break;
        case "companion":
            showSelectedOpt("companion");
            opt = "companion";
            break;
    }

    //Bracelet preview
    const ppName = document.querySelector("#pp-name");
    const ppBirthDate = document.querySelector("#pp-birthDate");
    const ppProcedure = document.querySelector("#pp-procedure");
    const ppAllergies = document.querySelector("#pp-allergies");
    const ppDoctorName = document.querySelector("#pp-doctor-name");
    //Label preview
    const lName = document.querySelector("#l-name");
    const lBirthDate = document.querySelector("#l-birthDate");
    const lDoctorName = document.querySelector("#l-doctor-name");
    const lFoodAllergy = document.querySelector("#l-foodAllergies");
    const lDrugAllergy = document.querySelector("#l-drugAllergies");
    const lProcedure = document.querySelector("#l-procedure");
    //Companion preview
    const patientName = document.querySelector("#patient-name");
    const companionName = document.querySelector("#companion-name");

    if (opt == "bracelet") {
        ppName.textContent = inputValues.nameInput;
        ppBirthDate.textContent = inputValues.birthDate;
        ppProcedure.textContent = inputValues.procedure;
        ppAllergies.textContent = inputValues.allergy;
        ppDoctorName.textContent = inputValues.doctorName;
    } else if (opt == "label") {
        lName.textContent = inputValues.l_nameInput;
        lBirthDate.textContent = inputValues.l_birthDate;
        lDoctorName.textContent = inputValues.l_doctorName;
        lFoodAllergy.textContent = inputValues.l_foodAllergies;
        lDrugAllergy.textContent = inputValues.l_drugAllergy;
        lProcedure.textContent = inputValues.l_procedure;
    } else {
        patientName.textContent = inputValues.patientInput;
        companionName.textContent = inputValues.companionInput;
    }

    return [
        lName,
        lBirthDate,
        lDoctorName,
        lFoodAllergy,
        lDrugAllergy,
        lProcedure,
        ppName,
        ppBirthDate,
        ppProcedure,
        ppAllergies,
        ppDoctorName,
        patientName,
        companionName,
    ];
}

function setUppercase(textPreview) {
    textPreview.forEach(textPreview => {
        textPreview.style.textTransform = "uppercase";
    });
}

document.getElementById("download-pdf").addEventListener("click", function () {
    let fileName;
    let width;
    let height;
    let art;
    let selectedOpt = document.querySelector("#labelOpt").value;

    const inputValues = getInputValues();
    const textPreview = updatePreviewDisplay(inputValues)
    checkInputLength(inputValues)
    setUppercase(textPreview)

    switch (selectedOpt) {
        case "bracelet":
            art = document.getElementById("bracelet");
            width = 205;
            height = 45;
            fileName = inputValues.nameInput + ".pdf";
            break;
        case "label":
            art = document.getElementById("label");
            width = 135;
            height = 45;
            fileName = inputValues.l_nameInput + ".pdf";
            break;
        case "companion":
            art = document.getElementById("companion");
            width = 135;
            height = 45;
            fileName = inputValues.patientInput + ".pdf";
            break;
    }

    const opt = {
        filename: fileName,
        image: { type: "pdf", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "mm",
            orientation: "landscape",
            format: [width, height],
        },
    };

    html2pdf().set(opt).from(art).save();
});
