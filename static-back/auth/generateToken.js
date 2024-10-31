import jwt from 'jsonwebtoken'
const sing = (payload, isAccessToken) =>{
    return jwt.sign(payload, isAccessToken ? process.env.ACCESS_TOKEN_SECRET : process.env.REFRESH_TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: 3600
    })
}
const generateAccessToken = (user) =>{
    return sing({user}, true);
}
const generateRefreshToken = (user)=> {
    return sing({user}, false)
}
export{
    generateAccessToken,
    generateRefreshToken
}