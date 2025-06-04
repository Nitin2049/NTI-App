import { Router } from "express";
const router = Router();
import { verifyTokenCtrl, userProfileCtrl, enquiryFormCtrl } from "../controllers/app.controllers.js";

router.route("/verify-token").post(verifyTokenCtrl);
router.route("/user/profile").post(userProfileCtrl);
router.route("/enquiry").post(enquiryFormCtrl);


export default router;