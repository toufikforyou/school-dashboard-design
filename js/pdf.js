
window.onload = function () {
    document.getElementById("savePDF")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            //console.log(invoice);
            //console.log(window);
            var opt = {
                margin: 0,
                filename: "RESULT'S FROM INFANCY ACADEMY SCHOOL.pdf",
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
