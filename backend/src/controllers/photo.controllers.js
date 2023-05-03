import Person from "../models/person.models"
import Pick from "../models/picks.models"
import fs from 'fs'


export const getAllPost = async (req, res) => {

    console.log("GET ALL PHOTO")
    const pick = await Person.findAll({
        attributes: ["username","profileImg"],include: [{
            model: Pick,
            limit: 20,
            order: [['createdAt', 'DESC']],
            attributes: ["name","path","createdAt"]
        }]
    })
    res.json(pick).status(200)
}

export const getPhoto = (req, res)=>{
    let { id } = req.params
    const imageData = fs.readFileSync(`uploads/${id}`)
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageData);
}


export const getPost = async (req, res) => {
    let { id } = req.params
    if(!id) return res.json({"msg":"Error en identificador de foto"}).status(500)
    console.log(`Foto ID: ${id}`)
    const pick = await Person.findAll({
        attributes: ["username","profileImg"],include: [{
            model: Pick,
            where: { id },
            attributes: ["name","path","createdAt"]
        }]
    })
    
    if(pick.length===0) return res.json({"msg":"empty"})
    res.json(pick).status(200)
}


export const removePhoto = async (req, res)=>{
    let { id } = req.params
    if(!id) return res.json({"msg":"Error en identificador de foto"}).status(500)
    const pick = await Pick.update({state:false},{where:{id}})
    await pick.save()
    res.json({"msg":"Eliminado correctamente"}).status(200)
}