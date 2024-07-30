document.getElementById("download-pdf").addEventListener("click", function () {
    const fichaCadastral = document.getElementById("fichaCadastral");

    //const fileName = inputValues.inputName + ".pdf";
    const opt = {
        filename: "teste", //Colocar variavel fileName depois
        image: { type: "pdf", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
        },
    };

    html2pdf().set(opt).from(fichaCadastral).save();
});
