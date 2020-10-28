/*
    Rutas de eventos
    host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const router = Router();

// Todos tiene que pasar por una validación JWT
// Todas las rutas por debajo del 'use' utilizan la validación JWT
router.use(validarJWT);
router.get("/", getEventos);
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
