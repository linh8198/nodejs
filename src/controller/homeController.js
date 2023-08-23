
const db = require("../models/index")
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

module.exports = {
    getHomePage
}