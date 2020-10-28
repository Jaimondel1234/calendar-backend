const express = require("express");
const { validationResult } = require("express-validator");
//El next es una función que se ejecuta si todo va correctamente
const validarCampos = (req, res = response, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  next();
};
module.exports = { validarCampos };
