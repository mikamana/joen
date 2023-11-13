import * as yesRepository from "../repository/yesRepository.js";

export async function getListPage(req, res) {
  const rows = await yesRepository.getListPage('SS');
  res.json(rows);
}