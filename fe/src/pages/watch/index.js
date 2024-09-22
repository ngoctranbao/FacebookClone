import React, {useState} from "react"
import { uploadFile } from "../../services/file";

const Watch = () => {
    // return (
    //     <div style={{backgroundColor: "yellow"}}>Messages</div>
    // )
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (!file) return;
  
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await uploadFile(formData)
        
        console.log(response);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  
    return (
      <div>
        <h2>Upload an Image</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {imageUrl && (
          <div>
            <p>Image uploaded successfully!</p>
            <img src={imageUrl} alt="Uploaded" width="300" />
          </div>
        )}
      </div>
    );
}

export default Watch
