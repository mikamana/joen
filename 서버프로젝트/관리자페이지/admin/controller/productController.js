import * as adminRepository from "../repository/adminRepository.js";


export async function createProduct(req, res) {

    let { id, name, category } = req.body

    if (category === "대형") {
        category = "10001";
    } else if (category === "중형") {
        category = "10002";
    } else if (category === "소형") {
        category = "10003"
    } else if (category === "컴퓨터") {
        category = "20001"
    } else if (category === "프린터") {
        category = "20002"
    } else if (category === "악세사리") {
        category = "20003"
    } else if (category === "생활용품") {
        category = "30001"
    }

    console.log(req.body);

    const result = await adminRepository.createProduct(id, name, category)

    if (result === "success") {

        res.redirect("/")

    }


}

export async function getProduct(req, res) {

    const rows = await adminRepository.getProduct();

    res.json(rows);

}

export async function updateProduct(req, res) {

    let { id, name, category } = req.body

    if (category === "대형") {
        category = "10001";
    } else if (category === "중형") {
        category = "10002";
    } else if (category === "소형") {
        category = "10003"
    } else if (category === "컴퓨터") {
        category = "20001"
    } else if (category === "프린터") {
        category = "20002"
    } else if (category === "악세사리") {
        category = "20003"
    } else if (category === "생활용품") {
        category = "30001"
    }

    const result = await adminRepository.updateProduct(name, category, id)

    if (result === "success") {

        res.redirect("/")

    }

}

export async function deleteProduct(req,res){

    const {id} = req.body

    const result = await adminRepository.deleteProduct(id)

    if(result==="success"){

        res.redirect("/")

    }

}