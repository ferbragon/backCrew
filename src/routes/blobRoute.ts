import { Router } from "express"
import multer from "multer"
import {
  uploadBlob,
  getBlob,
  downloadBlob,
  deleteBlob
} from "../controllers/azure/blob"

const upload = multer()
const router = Router()

router.post("/create", upload.single("file"), uploadBlob) // Subir Archivo
router.get("/get/:container/:filename", getBlob) // ver Archivo
router.get("/download/:container/:filename", downloadBlob) // Para descargar los Archivos
router.delete("/delete", deleteBlob) // Borrar un Archivo

export { router }
