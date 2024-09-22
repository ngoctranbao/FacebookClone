import { bucket } from '../config/configFirebase.js';


export const uploadFile = async(data) => {
    try {
        const blob = bucket.file(data.originalname);
        const blobStream = blob.createWriteStream({
          metadata: {
            contentType: data.mimetype,
          },
        });
    
        blobStream.on('error', (err) => {
          throw new Error(`upload file error ${err.message}`)
        });
        blobStream.end(data.buffer);

        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        return publicUrl
      } catch (error) {
        throw new Error(`upload file error ${error}`)
      }
}
