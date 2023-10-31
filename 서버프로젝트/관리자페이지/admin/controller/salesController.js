import * as adminRepository from "../repository/adminRepository.js";


export async function getSales(req, res) {

    const rows = await adminRepository.getSales()

    res.json(rows);


}