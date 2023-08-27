const bcrypt = require('bcryptjs');
const db = require('../models/index')
const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
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
                gender: data.gender === '1' ? true : false,
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

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.User.findAll()
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}
let getUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.User.findOne({
                where: { id: id }
            })
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.lastName = data.lastName
                user.firstName = data.firstName
                user.address = data.address
                await user.save()
                const users = await db.User.findAll()
                resolve(users)
            } else {
                resolve()
            }
        } catch (e) {
            reject(e)
        }
    })
}
let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {

            await db.User.destroy({
                where : { id : userId}
            });
         let users =    await db.User.findAll()
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser

}