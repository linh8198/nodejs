const bcrypt = require('bcryptjs');
const db = require('../models/index')
const salt = bcrypt.genSaltSync(10);
let CRUDservice = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashP = await hashPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashP,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender==='1'? true: false,
                roleId: data.roleId,
                positionId: null,
                image: null,
            })
            resolve('Ok susscess')
        } catch (e) {
            reject(e)
        }
    })

}

let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = CRUDservice