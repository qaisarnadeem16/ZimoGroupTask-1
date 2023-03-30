import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { PDFDocument, StandardFonts } from 'pdf-lib';

const Test = () => {
    const sigCanvasRef = useRef();

    const handleDownload = async () => {
      // Retrieve the data URL of the signature image from the SignatureCanvas
      const imgData = sigCanvasRef.current.getTrimmedCanvas().toDataURL('image/png');
  
      // Load the existing PDF file using pdf-lib
      const url = '/file.pdf'; // replace with your PDF file path
      const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
      // Add a new page to the PDF document
      const page = pdfDoc.addPage();
  
      // Embed the signature image on the new page
      const pngImage = await pdfDoc.embedPng(imgData);
      const { width, height } = pngImage.scale(0.5);
      page.drawImage(pngImage, {
        x: page.getWidth() / 2 - width / 2,
        y: page.getHeight() / 2 - height / 2,
        width,
        height,
      });
  
      // Add text to the new page (optional)
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      page.drawText('Signed by:', {
        x: 50,
        y: 50,
        font: helveticaFont,
        size: 12,
      });
  
      // Download the modified PDF file
      const modifiedPdfBytes = await pdfDoc.save();
      const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'signed_document.pdf';
      link.click();
    };

  return (
    <div>
      <SignatureCanvas ref={sigCanvasRef} penColor='black' canvasProps={{width: 500, height: 200}} />
      <button onClick={handleDownload}>Download Signed Document</button>
    </div>
  );
};

export default Test;
