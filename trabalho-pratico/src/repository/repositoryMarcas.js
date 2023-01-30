import { promises as fs } from "fs";
const { readFile } = fs;

async function getMarcas() {
  return JSON.parse(await readFile(global.fileName));
}

export default { getMarcas };
