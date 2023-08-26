// import express from 'express'
const express = require('express')
const {getHomePage, getCRUD, postCRUD} = require('../controller/homeController')
let router = express.Router()
let initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/crud', getCRUD)
    router.post('/post-crud', postCRUD)
    return app.use('/' , router )
}

module.exports = initWebRoutes
// export default initWebRoutes