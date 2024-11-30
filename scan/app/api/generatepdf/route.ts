import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import CryptoJS from "crypto-js";

export async function POST(request: NextRequest) {
    try{
        const reqBody = await request.json()

    if (!reqBody) {
      return NextResponse.json({ error: "Text and password are required." });
    }
    const {text,password} = reqBody

    // Create a new PDF
    const encryptedText = CryptoJS.AES.encrypt(text, password).toString();

    // Create a new PDF
    const doc = new jsPDF();
    doc.text(`Encrypted Text: ${encryptedText}`, 10, 10);

    // Save the PDF as a buffer
    const pdfBuffer = doc.output('arraybuffer');
   

    // Return the PDF as a download
    const response = new NextResponse(Buffer.from(pdfBuffer), {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename=encrypted-text.pdf',
        },
      });
    
      return response;
    }
    catch(err:any){
        console.log(err);
        return NextResponse.json({
            success: false,
            message: err.message
        }, { status: 500 });
    }
}