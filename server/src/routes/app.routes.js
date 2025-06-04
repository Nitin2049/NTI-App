import { Router } from "express";
const router = Router();
import {
  verifyTokenCtrl,
  userProfileCtrl,
  enquiryFormCtrl,
  applyForCertificateCtrl,
  onlineRegistrationCtrl,
} from "../controllers/app.controllers.js";

router.route("/verify-token").post(verifyTokenCtrl);
router.route("/user/profile").post(userProfileCtrl);
router.route("/enquiry").post(enquiryFormCtrl);
router.route("/apply-for-certificate").post(applyForCertificateCtrl);
router.route("/registration").post(onlineRegistrationCtrl);

export default router;
