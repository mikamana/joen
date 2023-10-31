import * as adminRepository from "../repository/adminRepository.js";


export async function join(req, res) {

    let { name, id, gender, phone, email, city, birthday, register_date } = req.body

    if (gender == "male") {
        gender = "M"
    } else if (gender == "female") {
        gender = "F"
    }

    const result = await adminRepository.join(name, id, gender, phone, email, city, birthday, register_date)
    if (result === "success") {

        res.redirect("/");

    }

}

export async function ejoin(req, res) {

    const { id, name, gender, phone, email, hire_date, retire_date } = req.body


    const result = await adminRepository.ejoin(id, name, gender, phone, email, hire_date, retire_date)

    if (result === "success") {
        res.redirect("/");
    }

}

