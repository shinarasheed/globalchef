const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");

const classController = require('../controller/classController')

const router = express.Router();

router.post("/signUp", authController.signUp);
router.post("/logIn", authController.login);
router.patch('/updateMyClass/:id', authController.protect, authController.restrictTo( 'instructor', 'admin'), classController.updateMyClass)
router.get('/me', authController.protect, userController.getMe)
router.patch('/updateMe', authController.protect, userController.updateMe)
router.get('/getAllMyClass', authController.protect, classController.getAllMyClass)


router.route("/").get(authController.protect, authController.restrictTo('admin'),userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUserById)
  .patch(authController.protect, authController.restrictTo('admin'), userController.changeUserRole);

module.exports = router;
