import * as yesRepository from "../repository/yesRepository.js";


export async function getMonthPage(req, res) {
  const rows = await yesRepository.getToPage('MWBS');
  res.json(rows);
}