// import express from 'express'
const express = require('express')
const {getHomePage} = require('../controller/homeController')
let router = express.Router()
let initWebRoutes = (app) => {
    router.get('/', getHomePage)
    return app.use('/' , router )
}

module.exports = initWebRoutes
// export default initWebRoutes