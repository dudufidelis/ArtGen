function getInputValues() {
    const inputName = document.getElementById("nameInput").value;
    const genre = document.getElementById("genre").value;

    return { inputName, genre };
}

function updatePreviewDisplay(inputValues) {
    const name = document.getElementById("bv-name");
    const welcomeMsg = document.getElementById("bv-welcome-msg");

    welcomeMsg.textContent = inputValues.genre === "masc" 
        ? "Seja Bem-Vindo!" 
        : "Seja Bem-Vinda!";

    name.textContent = inputValues.inputName;
}

document.getElementById("download-png").addEventListener("click", function () {
    const boasVindas = document.getElementById("BoasVindasTV");

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
