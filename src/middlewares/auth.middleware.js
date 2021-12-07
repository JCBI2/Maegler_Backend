const jwt = requite("../modules/jwt.js")

const verifyToken = (req, res, next) => {
    try{
        const token = req.headers["authorization"]
    
        const { id, role } = jwt.verifyToken(token)
        req.user = { id, role }
        next();
    }catch( err){
        res.status(400).send({ message: "Invalid token"})
    }
}

module.exports = verifyToken

