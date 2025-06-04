import { Router } from "express";
const router = Router();
import { verifyTokenCtrl, userProfileCtrl, saveUser } from "../controllers/app.controllers.js";

router.route("/verify-token").post(verifyTokenCtrl);
router.route("/user/profile").get(userProfileCtrl);
router.route("/user/profile").post(saveUser);


export default router;