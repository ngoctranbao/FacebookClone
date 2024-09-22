import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticate.js";
import { handleUploadFile } from "../controllers/file.js";
import multer from 'multer'

export const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('image'), handleUploadFile)
