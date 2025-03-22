const RESUME = "./resume.pdf";

function downloadPDF() {
    const fileURL = process.env.PUBLIC_URL + RESUME;
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default downloadPDF;
