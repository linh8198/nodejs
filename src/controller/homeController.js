
const db = require("../models/index")
const CRUDservice = require('../services/CRUDservice')
let getHomePage = async  (req,res) => {
    try {
        let data = await db.User.findAll()
        return res.render('Home.ejs', {
            data: JSON.stringify(data)
        })

    } catch(e) {
        console.log(e)
    }
}
let getCRUD = (req, res) => {
    res.render('crud.ejs')
}

 let postCRUD = async (req, res) => {
  await CRUDservice.createNewUser(req.body)
   return res.send('crudaa')
 }
 let displayGetCRUD = async(req, res) => {
   let data=  await CRUDservice.getAllUsers()
    return res.render('users.ejs', {
        data: data
    })
 }
 
 let getEditPage = async(req, res) => {
    let userId = req.query.id
    let user = await CRUDservice.getUser(userId)
    return res.render('editPage.ejs', {user})
 }

 let editUser = async (req, res) => {
    let data = req.body
   
      let users =   await CRUDservice.updateUser(data)

    return res.render("users.ejs", {data : users})
 }

 let deleteCRUD = async (req, res) => {
    let userId = req.query.id
   let users =  await CRUDservice.deleteUser(userId)
    return res.render('users',{data: users})
 }
module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    getEditPage,
    editUser,
    deleteCRUD,

}
