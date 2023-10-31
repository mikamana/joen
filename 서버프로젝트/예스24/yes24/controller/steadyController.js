import * as yesRepository from "../repository/yesRepository.js";

export async function getSteadyPage(req, res) {
  const rows = await yesRepository.getToPage('SS');
  res.json(rows);
}