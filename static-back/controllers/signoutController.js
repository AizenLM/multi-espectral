import mongoose from "mongoose";
import jsonResponse from "../utils/jsonResponse.js";
import User from "../models/usersModel.js";
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  if (!!!firstName || !!!lastName || !!!email || !!!password) {
    console.log("Los datos son requridos");
    return res.status(400).json(
      jsonResponse(400, {
        error: "Todos los campos son requeridos",
      })
    );
  }

  const user = new User();
  const exist = await user.emailExist(email);
  if (exist)
    return res
      .status(400)
      .json(jsonResponse(400, { error: "El correo ya esta registrado" }));

  try {
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    console.log("usuario creado");
    return res
      .status(200)
      .json(jsonResponse(200, { message: "Usuario creado correctamente" }));
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export { registerUser };
