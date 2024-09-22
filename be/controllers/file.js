import { uploadFile } from "../services/file.js";

export const handleUploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image file uploaded.');
  }
  try {
        const fileUrl = await uploadFile(req.file)
        return res.status(200).json({fileUrl: fileUrl, message: "upload file success"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}