//W and H used in format jsPDF according to selected label
let width = 305;
let height = 45;
// 85, 20 to label

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
    const inputName = document.getElementById("nameInput").value;
    const doctorName = document.querySelector("#doctorName").value;
    const date = document.querySelector("#date").value;
    
    return { inputName, doctorName, formattedDate, procedure, foodAllergies, drugAllergy, suits };
}

document.getElementById("download-pdf").addEventListener("click", function () {
    const art = document.getElementById("bracelet");

    //const fileName = inputValues.inputName + ".pdf";
    const opt = {
        filename: "teste", //Colocar variavel fileName depois
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
