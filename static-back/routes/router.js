import { Router } from "express";
import { authenticateUser } from "../controllers/loginController.js";
import { registerUser } from "../controllers/signoutController.js";
const router = Router();

// login
router.post('/api/login', authenticateUser);


//signout
router.post('/api/signout', registerUser)
export default router