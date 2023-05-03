import { Router } from "express";
import Pick from '../models/picks.models.js'
import autenticate from "../libs/autentication.js";
import { getAllPost, getPost, removePhoto, getPhoto } from "../controllers/photo.controllers.js";
import upload from '../libs/uploadsFiles.js'
const router = Router()

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        let { authorization } = req.headers
        let { filename } = req.file
        const result = await autenticate(authorization)
        if (!result) return res.json({ "msg": "Error in session" })
        let newPick = await Pick.create({
            path: `http://localhost:3001/uploads/${filename}`,
            name: filename,
            PersonId: authorization
        })
        await newPick.save()
        res.json({ "msg": "save successfully" }).status(200)
    } catch {
        return res.json({ "msg": "Internal error" }).status(500)
    }
})

router.get('/uploads/:id', getPhoto)

router.get('/post', getAllPost)

router.get('/post/:id', getPost)

router.delete('/remove/:id', removePhoto)


export default router