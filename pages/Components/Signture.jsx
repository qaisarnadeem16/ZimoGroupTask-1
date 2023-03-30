import React, { useState, useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas';
import {jsPDF } from 'jspdf';
// import pdf from '/file.pdf'

const Signture = () => {

    const signatureRef = useRef();

    const handleDownload = () => {
        const canvas = signatureRef.current.getCanvas();
        const imgData = canvas.toDataURL('image/png');

        const doc = new jsPDF();

        doc.addImage(imgData, 'PNG', 10, 10, 100, 50);

        // download the PDF file
        doc.save('signature.pdf');
    };

    
        const handleClick = () => {
          window.open('/sample.pdf', '_blank');
        }

        return (
            <>
                    <h1 className="text-center pt-4  text-xl font-bold">Signature Here</h1>

                <div className="flex flex-col sm:flex-row justify-center items-center py-10 gap-3">
                    <SignatureCanvas
                        ref={signatureRef}
                        canvasProps={{ width: 300, height: 200, className: "bg-white border border-gray-300" }}
                    />

                    <div className="flex flex-col gap-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded"   onClick={handleDownload} >
                            Download PDF
                        </button>

                        <button onClick={handleClick}    className="bg-red-500 hover:bg-red-700 text-white font-bold  px-4 rounded">  Open PDF </button>
                        
                         <a rel='noreferrer' href={"/file.pdf"} onClick={handleDownload}  target='_blank' >open</a>
                                       
                    </div>
                </div>

            </>
        )
    }

    export default Signture
