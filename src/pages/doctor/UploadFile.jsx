import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../App';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [uploadedFileUrl, setUploadedFileUrl] = useState(''); // New state for uploaded file URL

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadProgress(0); // Reset progress
    setMessage('');       // Reset message
  };

  useEffect(() => {
    if (message) alert(message);
  }, [message]);

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    try {
      // Request a signed URL from your backend
      const response = await axios.post(`${baseUrl}/doctor/get-signed-url`, {
        fileName: file.name,
        type: file.type,
      });

      const { url } = response.data;

      // Upload the file directly to S3 using the signed URL
      await axios.put(url, file, {
        headers: {
          'Content-Type': file.type,
        },

        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      // Set uploaded file URL to display it
      setUploadedFileUrl(url.split('?')[0]); // Remove query params from URL if any
      setMessage('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Failed to upload file.');
    }
  };

  return (
    <div className="file-upload-container w-full h-screen flex flex-col justify-center items-center space-y-4">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className='border p-3 rounded-md bg-slate-300 text-black'>Upload</button>

      {uploadProgress > 0 && (
        <div className="progress-bar w-full max-w-lg bg-gray-200 rounded-full h-4">
          <div
            className="progress bg-green-600 h-full rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      {uploadedFileUrl && (
        <div className="mt-4">
          <h3>Uploaded File:</h3>
          {file.type.startsWith('image') ? (
            <img src={uploadedFileUrl} alt="Uploaded file" className="max-w-full h-auto mt-2 rounded-lg" />
          ) : (
            <a href={uploadedFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View uploaded file
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
