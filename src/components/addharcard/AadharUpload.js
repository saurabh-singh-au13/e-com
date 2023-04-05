import React, { useState } from 'react';
import * as AadhaarValidator from 'aadhaar-validator';

function AadhaarUpload() {
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarValid, setAadhaarValid] = useState(false);

  const handleAadhaarUpload = (event) => {
    setAadhaarFile(event.target.files[0]);
  }

  const handleAadhaarNumberChange = (event) => {
    const aadhaarNumberInput = event.target.value;
    if (AadhaarValidator.isValidNumber(aadhaarNumberInput)) {
      setAadhaarNumber(aadhaarNumberInput);
      setAadhaarValid(true);
    } else {
      setAadhaarNumber(aadhaarNumberInput);
      setAadhaarValid(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submit logic here
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="aadhaar-number">Aadhaar Card Number:</label>
        <input type="text" id="aadhaar-number" name="aadhaar-number" pattern="[0-9]{12}" value={aadhaarNumber} onChange={handleAadhaarNumberChange} required />
        {aadhaarValid && aadhaarFile && <p>Aadhaar Card Uploaded: {aadhaarFile.name}</p>}
        <label htmlFor="aadhaar-upload">Upload Aadhaar Card:</label>
        <input type="file" id="aadhaar-upload" name="aadhaar-upload" accept=".pdf,.jpg,.jpeg,.png" onChange={handleAadhaarUpload} required />
        <button type="submit" disabled={!aadhaarValid || !aadhaarFile}>Submit</button>
      </form>
    </div>
  );
}

export default AadhaarUpload;
