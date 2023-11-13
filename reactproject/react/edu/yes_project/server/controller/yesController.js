import * as yesRepository from "../repository/yesRepository.js";

export async function getListPage(req, res) {
    const rows =await yesRepository.getListPage('BS');
    res.json(rows);
}

// export async function createPage(req, res) {
//     const { url, bname, bname_comment, author, translator, publisher, price, date, jenre } = req.body;
//     let cid;
//     if (jenre === "bestseller") {
//         cid = "BS";
//     } else if (jenre === "realtime") {
//         cid = "DBS";
//     } else if (jenre === "day") {
//         cid = "HPBS";
//     } else if (jenre === "monthweek") {
//         cid = "MWBS";
//     } else if (jenre === "hotprice") {
//         cid = "RTBS";
//     } else if (jenre === "steady") {
//         cid = "SS";
//     }
//     const result = await yesRepository.createPage(cid, url, bname, bname_comment, author, translator, publisher, price, date, jenre)
//     if (result === "success") {
//         res.redirect("/BestSeller");
//     }

// }







