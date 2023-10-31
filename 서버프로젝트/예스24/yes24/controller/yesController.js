import * as yesRepository from "../repository/yesRepository.js";
import ejs from "ejs";

export async function getAll(req, res) {
    ejs.renderFile("./template/list.ejs", {})
        .then((result) => {
            res.end(result)
        });
}

export async function getPage(req, res) {
    
    const rows = await yesRepository.getToPage('BS')
    res.json(rows);

}

export async function createPage(req, res) {
    const { url, bname, bname_comment, author, translator, publisher, price, date, jenre } = req.body;
    let cid;
    if (jenre === "BestSeller") {
        cid = "BS";
    } else if (jenre === "realTimeBestSeller") {
        cid = "DBS";
    } else if (jenre === "dayBestSeller") {
        cid = "HPBS";
    } else if (jenre === "monthWeekBestSeller") {
        cid = "MWBS";
    } else if (jenre === "hotPriceBestSeller") {
        cid = "RTBS";
    } else if (jenre === "steadySeller") {
        cid = "SS";
    }
    const result = await yesRepository.createPage(cid, url, bname, bname_comment, author, translator, publisher, price, date, jenre)
    if (result === "success") {
        res.redirect("/BestSeller");
    }

}







