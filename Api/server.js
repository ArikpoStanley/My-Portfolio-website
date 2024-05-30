require ('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const authRoutes = require('./routes/auth.js')
// //routes
app.use(cors())
app.use('/static', express.static('public'))
app.use('/public', express.static('public/files'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api', authRoutes)

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
})
        
  