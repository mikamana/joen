import * as adminRepository from "../repository/adminRepository.js";


export async function getAll(req, res) {

  const result = await adminRepository.getAll()

  res.json(result);

}

export async function employeeGetAll(req, res) {

  const result = await adminRepository.employeeGetAll()

  res.json(result);
}