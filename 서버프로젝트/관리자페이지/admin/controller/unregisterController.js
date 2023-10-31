import * as adminRepository from "../repository/adminRepository.js";


export async function unregister(req, res) {
    const { id } = req.body
    console.log(id);
    const result = await adminRepository.unregister(id)
    console.log(result);
    if (result === "success") {

        res.redirect("/");

    }


}