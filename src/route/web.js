// import express from 'express'
const express = require('express')
const {getHomePage, getCRUD, postCRUD, displayGetCRUD, getEditPage, editUser,deleteCRUD,} = require('../controller/homeController')
let router = express.Router()
let initWebRoutes = (app) => {
    router.get('/', getHomePage)
    router.get('/crud', getCRUD)
    router.post('/post-crud', postCRUD)
    router.get('/get-crud', displayGetCRUD)
    router.get('/edit-crud?:id' , getEditPage)
    router.get('/delete-crud?:id' , deleteCRUD)
    router.post('/edit-user', editUser)
    return app.use('/' , router )
}

module.exports = initWebRoutes
// export default initWebRoutes