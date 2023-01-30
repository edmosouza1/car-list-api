import MarcasServices from "../services/marcasServices.js";
async function getMaisModelos(req, res, next) {
  try {
    return res.send(await MarcasServices.getMaisModelos());
    global.logger.info(`${req.method} ${req.baseUrl}`);
  } catch (err) {
    next(err);
  }
}

async function getListaMaisModelos(req, res, next) {
  try {
    return res.send(await MarcasServices.getListaMaisModelos(+req.params.quantidade));
    global.logger.info(`${req.method} ${req.baseUrl}`);
  } catch (err) {
    next(err);
  }
}

async function getMenosModelos(req, res, next) {
  try {
    return res.send(await MarcasServices.getMenosModelos());
    global.logger.info(`${req.method} ${req.baseUrl}`);
  } catch (err) {
    next(err);
  }
}

async function getListaMenosModelos(req, res, next) {
  try {
    return res.send(await MarcasServices.getListaMenosModelos(+req.params.quantidade));
    global.logger.info(`${req.method} ${req.baseUrl}`);
  } catch (err) {
    next(err);
  }
}

async function postListaModelos(req, res, next) {
  try {
    const { brand } = req.body;
    return res.send(await MarcasServices.listaModelos(brand));
    global.logger.info(`${req.method} ${req.baseUrl}`);
  } catch (err) {
    next(err);
  }
}

export default { getMaisModelos, getListaMaisModelos, getMenosModelos, getListaMenosModelos, postListaModelos };
