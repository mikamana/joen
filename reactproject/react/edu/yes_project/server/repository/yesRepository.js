import { db } from "../db/database.js";

// M(Model) 레파지토리하나당 테이블 하나
// 테이블을 기준으로 레파지토리를 생성한다.
// 예 : 고객에 대한 테이블과 사원에 대한 테이블이 있으면 고객레퍼지토리와 사원레퍼지토리를 따로 생성한다.

// export async function getToPage(cid) {
//     return db.execute("select cid,img_url,bname,bname_comment,author,translator,publisher,left(pdate,10) as pdate,category_name ,price,dc from view_yes24 where cid = ?",[cid])
//         .then((result) =>result[0]);
//         //이중배열
// }

export async function getListPage(bsid) {
    return db.execute("select * from yes24 where bs_id = ? ",[bsid])
        .then((result) =>result[0]);
        //이중배열
}

// export async function createPage(cid, url, bname, bname_comment, author, translator, publisher, price, date) {
//     return db.execute("insert into booklist(cid,img_url,bname,bname_comment,author,translator,publisher,pdate,price,dc) values(?,?,?,?,?,?,?,?,?,10)", [cid, url, bname, bname_comment, author, translator, publisher, date, price])
//         .then((result) => "success");
// }

export async function joinPage(params){
    return db.execute("insert into yesJoin(name,id,password) values(?,?,?)",params)
    .then((result)=> "success");
}

export async function createToken(id){
    return db.execute("select password from yesJoin where id = ?",[id])
    .then((result)=> result[0][0]);
}


// export async function getDayPage() {
//     return db.execute("select cid,img_url,bname,bname_comment,author,translator,publisher,left(pdate,10) as pdate,category_name ,price,dc from view_hpbs")
//         .then((result) => result[0])
// }
// export async function getHotPricePage() {
//     return db.execute("select cid,img_url,bname,bname_comment,author,translator,publisher,left(pdate,10) as pdate,category_name ,price,dc from view_rtbs")
//         .then((result) => result[0])
// }
// export async function getMonthPage() {
//     return db.execute("select cid,img_url,bname,bname_comment,author,translator,publisher,left(pdate,10) as pdate,category_name ,price,dc from view_mwbs")
//         .then((result) => result[0])
// }
// export async function getSteadyPage() {
//     return db.execute("select cid,img_url,bname,bname_comment,author,translator,publisher,left(pdate,10) as pdate,category_name ,price,dc from view_ss")
//         .then((result) => result[0])
// }