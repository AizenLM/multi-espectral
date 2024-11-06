import mongoose from "mongoose";
import jsonResponse from "../utils/jsonResponse.js";
import User from "../models/usersModel.js";
import getUserInfo from "../lib/getUserInfo.js";
const saludar = async (req, res) => {
  res.status(200).json({ menssage: "hola" });
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!!!email || !!!password) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Todos los campos son requeridos",
      })
    );
  }
  const user = await User.findOne({ email });
  if (user) {
    console.log("si pasa de validacion de correo:");
    const correctPassword = await user.commparePassword(
      password,
      user.password
    );
    console.log(correctPassword);
    if (correctPassword) {
      console.log("Acceso correcto");
      const accessToken = user.createAccessToken();
      const refreshToken = await user.createRefreshToken();
      res
        .status(200)
        .json(
          jsonResponse(200, {
            user: getUserInfo(user),
            accessToken,
            refreshToken,
          })
        );
    } else {
      res
        .status(400)
        .json(jsonResponse(400, { error: "Los datos son incorrectos" }));
    }
  }
  else{
    res.status(400).json(jsonResponse(400, {error: "Los datos son incorrectos"}))
  }
};

export { authenticateUser };
