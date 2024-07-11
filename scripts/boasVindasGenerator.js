const generatePNGButton = document.getElementById("download-png");
const boasVindas = document.getElementById("BoasVindasTV");

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