const express = require("express");

const classController = require("../controller/classController");
const authController = require('../controller/authController');

const router = express.Router();


router.delete('/deleteMyClass/:id', authController.protect, authController.restrictTo( 'instructor'), classController.deleteMyClass)

router.put('/updateMyClass/:id', authController.protect, authController.restrictTo( 'instructor'), classController.updateMyClass)

router
  .route("/")
  .get(classController.getAllClass)
  .post(authController.protect, authController.restrictTo('admin', 'instructor') ,classController.createClass); 

router
  .route("/:id")
  .get( authController.protect,  classController.getClassById)
  .patch(authController.protect,authController.restrictTo('admin'),  classController.updateClass)
  .delete(authController.protect,authController.restrictTo('admin') ,classController.deleteClass);

module.exports = router;
