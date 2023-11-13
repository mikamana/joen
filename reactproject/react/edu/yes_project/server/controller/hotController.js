import * as yesRepository from "../repository/yesRepository.js";


export async function getListPage(req, res) {
  const rows = await yesRepository.getListPage('HPBS');
  res.json(rows);
}