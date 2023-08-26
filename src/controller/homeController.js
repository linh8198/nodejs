
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
  await CRUDservice(req.body)
   return res.send('crudaa')
 }
module.exports = {
    getHomePage,
    getCRUD,
    postCRUD
}