import React from "react";
import downloadPDF from "../scripts/downloadPDF";

function DownloadPDF() {
    return <>
        <button onClick={downloadPDF}>
            Download
        </button>
    </>
}

export default DownloadPDF;
