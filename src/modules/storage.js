const path = require("path")
const { v4 } = require("uuid")
const multer = require("multer")

const userStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,  '../public/img/profile-pics/') );
    },

    filename: (req, file, cb) => {
        cb(null, v4() + path.extname(file.originalname))
    }
})

const userFields = [ {
    name: 'profilePhoto', maxCount: 1
}]

module.exports = { userStorage, userFields }