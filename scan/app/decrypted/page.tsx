"use client"
import { useState } from 'react';
import axios from 'axios';

const DecryptFileComponent = () => {
  const [password, setPassword] = useState('');
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [decryptedFile, setDecryptedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEncryptedFile(reader.result.split(',')[1]); // Save base64 of the file
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDecrypt = async () => {
    try {
      const response = await axios.post('/api/decryptpdf', {
        file: encryptedFile,
        password,
      });
      setDecryptedFile(response.data.file); // Handle the decrypted file (you can download it)
    } catch (error) {
      console.error('Decryption failed', error);
    }
  };

  return (
    // <div>
    //   <input
    //     type="file"
    //     onChange={handleFileChange}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Enter Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleDecrypt}>Decrypt File</button>

    //   {decryptedFile && <div>Decrypted File Content: {decryptedFile}</div>}
    // </div>
    <div className='px-20  bg-gray-200 min-h-screen'>
        <h1 className='text-3xl font-semibold'>Decrypt Your Data</h1>
        <div className='bg-white p-5 rounded-md mt-4 shadow-xl'>
            <h1 className='text-base'>Encrypted Text</h1>
            <input placeholder='Paste Your Encrypted Text here...' className='text-sm w-full h-40 border text-center rounded-md my-2'/>

            <h1 className='text-base mt-4'>Or Upload Encrypted File</h1>
            <input placeholder='Paste Your Encrypted Text here...' className='text-sm w-full h-40 border text-center rounded-md my-2'/>

            <h1 className='text-base mt-4'>Decryption Key</h1>
            <input placeholder='Enter Your Decryption key' className='text-sm w-full h-10 border text-start rounded-md my-2 p-1'/>

            <button className='w-full bg-blue-950 text-white rounded-md py-2'>Decrypt</button>
        </div>
        <div className='bg-white p-5 rounded-md mt-4 shadow-xl '>
            <h1 className='text-base font-bold'>Decrypted Result</h1>
            <input placeholder='Paste Your Encrypted Text here...' className='text-sm w-full h-40 border text-center rounded-md my-2 bg-gray-200 text-black'/>

           <div className='flex justify-between gap-2'>
           <button className='bg-gray-200 p-2 rounded-md text-sm mt-2 w-full'>Copy to Clipboard</button>
           <button className='bg-gray-200 p-2 rounded-md text-sm mt-2 w-full'>Download As PDF</button>
           </div>
        </div>
    </div>
  );
};


export default DecryptFileComponent;

