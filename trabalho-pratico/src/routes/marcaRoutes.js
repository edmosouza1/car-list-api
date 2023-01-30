import express from "express";
import MarcaControllers from "../controllers/marcasController.js";

const router = express.Router();
const barra = "/";
router.get(`${barra}maisModelos`, MarcaControllers.getMaisModelos);
router.get(`${barra}menosModelos`, MarcaControllers.getMenosModelos);
router.get(`${barra}listaMaisModelos/:quantidade`, MarcaControllers.getListaMaisModelos);
router.get(`${barra}listaMenosModelos/:quantidade`, MarcaControllers.getListaMenosModelos);
router.post(`${barra}listaModelos`, MarcaControllers.postListaModelos);

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
