import mongoose from "mongoose";
import jsonResponse from "../utils/jsonResponse.js";
import User from "../models/usersModel.js";
const saludar = async (req, res) => {
    res.status(200).json({menssage: 'hola'})
}

const authenticateUser  = async (req, res) => {
    const {email, password } = req.body;
    console.log(req.body)
    if (!!!email || !!!password) {
      console.log('Los datos son requridos')
      return res.status(400).json(
        jsonResponse(400, {
          error: "Todos los campos son requeridos",
        })
      );
    }
    const user = await User.findOne({email})
    if(user)
    {
        const correctPassword = await user.commparePassword(password, user.password);
        if(correctPassword){
            const accessToken = "access_token"
            const refreshToken = "refresh_token"
            res.status(200).json(jsonResponse(200, {user, accessToken, refreshToken}))
        }
    }else{
        res.status(400).json(jsonResponse(400, {error: 'Los datos son incorrectos'}))
    }
  
  };


export {
    authenticateUser
}