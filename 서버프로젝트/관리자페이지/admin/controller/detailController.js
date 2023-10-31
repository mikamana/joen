import * as adminRepository from "../repository/adminRepository.js";


export async function getDetail(req, res) {

    const rows = await adminRepository.getDetail()

    res.json(rows);


}