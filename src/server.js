// import express from 'express'
// import viewEngine from './config/viewEngine'
// import initWebRoutes from './route/web'
const express = require('express')
const viewEngine = require('./config/viewEngine')
const initWebRoutes = require('./route/web')
const connectDB = require('./config/connectDB')
require('dotenv').config();
let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

viewEngine(app)
initWebRoutes(app)

connectDB()
let port = process.env.PORT || 8089
app.listen(port, ()=> {
    console.log('fhhfkjlkljklf   ' + port)
})