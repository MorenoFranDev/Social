import Router  from "express"
import { getLogin, registerUser, removeUser, updateUser } from "../controllers/auth.controller"
const router = Router()

router.post('/login',getLogin)

router.post('/register',registerUser)

router.put('/edit/user/:id',updateUser)

router.delete('/delete/user/:id',removeUser)


export default router