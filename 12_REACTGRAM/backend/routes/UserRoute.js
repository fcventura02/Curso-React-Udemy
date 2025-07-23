const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getCurrentUser,
  update,
} = require("../controllers/UserController");

const validate = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} = require("../middlewares/UserValidator");
const authGuard = require("../middlewares/AuthGuard");
const { imageUpload } = require("../middlewares/imageUpload");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("file"),
  update
);

module.exports = router;
