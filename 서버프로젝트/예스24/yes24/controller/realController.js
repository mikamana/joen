import * as yesRepository from "../repository/yesRepository.js";


export async function getRealTimePage(req, res) {
  const rows = await yesRepository.getToPage('DBS');
  res.json(rows);
}