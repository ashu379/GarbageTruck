import React, { useState } from "react";

const ResumeUpload = () => {

     const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div className="image-upload-container">
            <div className="image-upload-preview">
                {file ? (
                    <div>
                        <p>{file.name}</p>
                        <p>Uploaded on {new Date().toLocaleDateString()}</p>
                    </div>
                ) : (
                    <p>No file uploaded</p>
                )}
            </div>
            <input
                type="file"
                accept=".doc,.docx,.rtf,.pdf"
                onChange={handleFileChange}
                id="file-input"
                className="image-upload-input"
            />
            <label htmlFor="file-input" className="image-upload-button">Update Resume</label>
            <p className="image-upload-formats">Supported Formats: doc, docx, rtf, pdf, up to 2 MB</p>
        </div>
    );
};

export default ResumeUpload;
