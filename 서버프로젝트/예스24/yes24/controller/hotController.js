import * as yesRepository from "../repository/yesRepository.js";


export async function getHotPricePage(req, res) {
  const rows = await yesRepository.getToPage('RTBS');
  res.json(rows);
}