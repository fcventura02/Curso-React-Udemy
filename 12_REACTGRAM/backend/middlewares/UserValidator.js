const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome deve conter no minimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("O E-mail é obrigatório.")
      .isEmail()
      .withMessage("Informe um E-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatório.")
      .isLength({ min: 6 })
      .withMessage("A senha deve conter no minimo 6 caracteres."),
    body("confirm_password")
      .isString()
      .withMessage("A confirmação de senha é obrigatório.")
      .custom((value, { req }) => {
        if (value != req.body.password)
          throw new Error("As senhas não são iguais.");
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O E-mail é obrigatório.")
      .isEmail()
      .withMessage("Informe um E-mail válido"),
    body("password").isString().withMessage("A senha é obrigatório."),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("password")
      .optional()
      .isLength({ min: 5 })
      .withMessage("A senha precisa de no mínimo 5 caracteres."),
  ];
};

module.exports = {
  loginValidation,
  userCreateValidation,
  userUpdateValidation,
};
