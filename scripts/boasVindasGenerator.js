let selectedArt = "hospitalization";

document.querySelector("#artOpt").addEventListener("change", () => {
    selectedArt = document.querySelector("#artOpt").value;
    switch (selectedArt) {
        case "hospitalization":
            showSelectedArt("hospitalization");
            break;
        case "maternity":
            showSelectedArt("maternity");
            break;
    }
});

function showSelectedArt(selectedArt) {
    const inputGenre = document.querySelector(".genre");
    const boas_vindas = document.querySelector("#BoasVindasTV");
    const maternidade = document.querySelector("#maternidade");

    if (selectedArt === "hospitalization") {
        maternidade.classList.add("notSelected");
        inputGenre.classList.remove("notSelected");
        boas_vindas.classList.remove("notSelected");
    } else {
        boas_vindas.classList.add("notSelected");
        inputGenre.classList.add("notSelected");
        maternidade.classList.remove("notSelected");
    }
}

function getInputValues() {
    const inputName = document.getElementById("nameInput").value;
    let genre = "";

    if (selectedArt === "hospitalization") {
        genre = document.getElementById("genre").value;
    }

    return { inputName, genre };
}

function updatePreviewDisplay(inputValues) {
    if (selectedArt === "hospitalization") {
        const bv_name = document.getElementById("bv-name");
        const welcomeMsg = document.getElementById("bv-welcome-msg");

        if (welcomeMsg) {
            welcomeMsg.textContent =
                inputValues.genre === "masc" ? "Seja Bem-Vindo!" : "Seja Bem-Vinda!";
        }

        if (bv_name) {
            bv_name.textContent = inputValues.inputName;
            bv_name.style.textTransform = "uppercase";
        }
    } else {
        const mt_name = document.querySelector("#mt-name");

        if (mt_name) {
            mt_name.textContent = inputValues.inputName;
            mt_name.style.textTransform = "capitalize";
        }
    }
}


document.getElementById("download-png").addEventListener("click", function () {
    const boasVindas = selectedArt === "hospitalization"
        ? document.getElementById("BoasVindasTV")
        : document.getElementById("maternidade");

    const inputValues = getInputValues();
    updatePreviewDisplay(inputValues);

    const fileName = inputValues.inputName + ".png";

    html2canvas(boasVindas, { scale: 5 }).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.setAttribute("href", base64image);
        link.setAttribute("download", fileName);
        link.click();
        link.remove();
    });
});

