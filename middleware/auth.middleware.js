const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error: "Нет доступа(no auth header)"})
    }

    const [type, token] = authorization.split(" ")
    
    if(type !== "Bearer") {
        return res.status(401).json({error: "неверный тип токена (Not Bearer)"})
    }

    try {
        req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY)
        next() 
    } catch (error) {
        return res.status(401).json({error: "неверный тип токена"})
    }
}