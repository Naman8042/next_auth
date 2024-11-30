import CryptoJS from 'crypto-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest) {
  const { encryptedText, password } = await req.json();

  if (!encryptedText || !password) {
    return NextResponse.json({ error: "Encrypted text and password are required." }, { status: 400 });
  }

  try {
    // Decrypt the encrypted text using CryptoJS
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedText) {
      return NextResponse.json({ error: "Incorrect password or invalid content." }, { status: 400 });
    }

    // Send the decrypted text back to the frontend
    return NextResponse.json({ text: decryptedText });
  } catch (error) {
    return NextResponse.json({ error: 'Decryption failed.' }, { status: 400 });
  }
}
