import { Router } from "express";
const router = Router();
import { verifyTokenCtrl, userProfileCtrl } from "../controllers/app.controllers.js";

router.route("/verify-token").post(verifyTokenCtrl);
router.route("/user/profile").get(userProfileCtrl);
// router.route("/reports").get(reportsCtrl)
// router.route("/register").post(registerCtrl)
// router.route("/login").post(loginCtrl)
// router.route("/user/:username").get(userHome);
// // router.route("/reports").get()

// export default router;