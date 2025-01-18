// ImageUpload.jsx
import React, { useState } from "react";
import avatar from "../media/avatar.png";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(avatar);

  // Handle file change event
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <>
      <div className="parent_upload">
        <div className="upload_container">
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="upload-input"
              style={{ display: "none" }}
            />
            <label htmlFor="upload-input" className="upload-button">
              Upload 
            </label>

            {selectedImage && (
              <div className="image-preview">
                <img src={selectedImage} alt="Uploaded" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
