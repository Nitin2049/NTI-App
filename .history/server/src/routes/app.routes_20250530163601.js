import { Router } from "express";
const router = Router();
import { verifyTokenCtrl, userProfileCtrl } from "../controllers/app.controllers.js";

router.route("/verify-token").post(verifyTokenCtrl);
router.route("/user/profile").post(userProfileCtrl);


export default router;