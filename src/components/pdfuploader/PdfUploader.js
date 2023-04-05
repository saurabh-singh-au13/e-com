import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

import "./PdfUploader.css"

function PdfUploader() {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploaded, setUploaded] = useState(false);


  
  const handlePdfUpload = (files) => {
    setPdfFiles(files.map((file) => file.base64));
    setUploadSuccess(true);
    setUploaded(true);
  };

  const handleChooseAnotherFile = () => {
    setPdfFiles([]);
    setUploadSuccess(false);
    setUploaded(false);
  };

  return (
    <div>
      <h2>Upload PDF Document</h2>
      {pdfFiles.length > 0 ? (
        <>
          <p>{pdfFiles.length} PDF files selected</p>
          {uploadSuccess && <p>PDF files uploaded successfully!</p>}
          {uploaded && (
            <button onClick={handleChooseAnotherFile}>Choose Another File</button>
          )}
        </>
      ) : (
        <FileBase64 multiple={true} onDone={handlePdfUpload} />
      )}
    </div>
  );
}

export default PdfUploader;
