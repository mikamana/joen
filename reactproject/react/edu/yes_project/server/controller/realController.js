import * as yesRepository from "../repository/yesRepository.js";

export async function getListPage(req, res) {
  const rows = await yesRepository.getListPage('RTBS');
  res.json(rows);
}