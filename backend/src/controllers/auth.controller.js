import Person from "../models/person.models"


export const getLogin = async (req, res) => {
    const { username, password } = req.body
    const setPerson = await Person.findOne({where: {username}})
    
    if(setPerson.password != password) return res.json({"msg":"Error in credentials"}).status(500)

    res.json({"msg":"Init session successfully","authorization":setPerson.id}).status(200)

}

export const registerUser = async (req, res) => {
    console.log("\nREGISTER USER POST\n")
    let { username, password } = req.body
    if (username === "" || username == null || password === "" || password == null) res.json({ "msg": "Error al crear ingresar datos" }).status(500)
    try {
        let newPerson = await Person.create({ username, password })
        await newPerson.save()
        res.json({ "msg": "Create successfully" }).status(200)
    } catch (e) {
        console.log(e)
        res.json({ "msg": "Error al crear usuario" }).status(500)
    }

}

export const updateUser = async(req, res) => {
    console.log("UPDATE USER")
    try{
        let {id} = req.params
        let {username, profileImg} = req.body
        const updatePerson = await Person.update({username,profileImg},{where:{id}})
        await updatePerson.save()
        res.json({"msg":"Update successfully"})
    }catch{
        res.json({"msg":"Error in data"})
    }
}

export const removeUser = async(req, res) => {
    console.log("UPDATE USER")
    try{
        let {id} = req.params
        const updatePerson = await Person.update({state: false},{where:{id}})
        await updatePerson.save()
        res.json({"msg":"Update successfully"})
    }catch{
        res.json({"msg":"Error in data"})
    }
}