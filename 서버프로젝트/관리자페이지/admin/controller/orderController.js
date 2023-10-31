import * as adminRepository from "../repository/adminRepository.js";


export async function getOrder(req, res) {

    const rows = await adminRepository.getOrder()

    res.json(rows);

}

export async function getYear(req, res) {

    const rows = await adminRepository.getYear()

    res.json(rows);

}

export async function getPrd(req, res) {

    const rows = await adminRepository.getPrd()

    res.json(rows);

}

export async function getCategory(req, res) {

    const rows = await adminRepository.getCategory()

    res.json(rows);

}

export async function getCustomer(req,res){

    const rows = await adminRepository.getCategory()

    res.json(rows);

}
