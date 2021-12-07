const jwt = require("jsonwebtoken")

const secret = "mysupersecret"

const generateToken = (id, role ) => {
    return jwt.sign({id, role}, secret, { expiresIn: '10h'})
}

const verifyToken = (token) => {
    return jwt.verifyToken(token, secret)
}

module.exports = { generateToken, verifyToken }