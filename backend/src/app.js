import express from 'express'
import pics from './routes/photos.routes'
import bodyParser from 'body-parser'
import auth from './routes/auth.routes'


const App = express()

App.use(bodyParser.urlencoded({extended: true}))
App.use(bodyParser.json())
App.use(pics)
App.use(auth)


export default App 