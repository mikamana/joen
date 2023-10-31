import * as yesRepository from "../repository/yesRepository.js";


export async function getDayPage(req, res) {
  const rows = await yesRepository.getToPage('HPBS');
  res.json(rows);
}