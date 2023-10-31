import * as adminRepository from "../repository/adminRepository.js";

export async function empUpdate(req, res) {

    let { id, name, phone, email } = req.body

    // if (gender === "male") {
    //     gender = "M"
    // } else if (gender === "female") {
    //     gender = "F"
    // }

    const result = await adminRepository.empUpdate(name, phone, email, id)

    if (result === "success") {

        res.redirect("/")

    }

}