import RepositoryMarcas from "../repository/repositoryMarcas.js";
import pkg from "lodash";
const { take } = pkg;

async function getMaisModelos() {
  try {
    const data = await RepositoryMarcas.getMarcas();
    const max = data.reduce(function (prev, current) {
      return prev.models.length > current.models.length ? prev : current;
    });
    return max.brand;
  } catch (error) {
    console.log(error.message);
  }
}

async function getMenosModelos() {
  try {
    const data = await RepositoryMarcas.getMarcas();
    const min = data.reduce(function (prev, current) {
      return prev.models.length < current.models.length ? prev : current;
    });
    return min.brand;
  } catch (error) {
    logger.log(error.message);
  }
}

async function getListaMaisModelos(quantidade) {
  try {
    const data = await RepositoryMarcas.getMarcas();
  
    const newArr = take(
      data.sort((a, b) => b.models.length - a.models.length),
      quantidade
    );
    return newArr.sort((a, b) => b.models.length - a.models.length || a.brand.localeCompare(b.brand)).map(({ brand, models }) => `${brand} - ${models.length}` );
  } catch (error) {
    logger.log(error.message);
  }
}

async function getListaMenosModelos(quantidade) {
try {
    const data = await RepositoryMarcas.getMarcas();
  
    const newArr = take(
      data.sort((a, b) => a.models.length - b.models.length),
      quantidade
    );
    return newArr.sort((a, b) => a.models.length - b.models.length || b.brand.localeCompare(b.brand)).map(({ brand, models }) => `${brand} - ${models.length}`);
  } catch (error) {
    logger.log(error.message);
  }
}

async function listaModelos(brandCar) {
  try {
    const data = await RepositoryMarcas.getMarcas();
    return data.filter(({ brand }) => brand.toUpperCase() === brandCar.toUpperCase());
  } catch (error) {
    logger.log(error.message);
  }
}

export default { getMaisModelos, getListaMaisModelos, getMenosModelos, getListaMenosModelos, listaModelos };
