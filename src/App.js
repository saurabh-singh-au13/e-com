import React from 'react'
import NavBar from './components/NavBar'
import PdfUploader from './components/pdfuploader/PdfUploader'
import AadhaarUpload from './components/addharcard/AadharUpload'
const App = () => {
  return (
   <>
    <div>
      <NavBar />
      <PdfUploader />
      <AadhaarUpload />
  
    </div>
   </>
  )
}

export default App