import { db } from "../data/database.js";




// export async function getNews() {

//     return db.execute("select * from news_list")
//         .then((result) => result[0])

// }

export async function createReplys(content, nid) {

    return db.execute("insert into news_reply (content,nid,redate) value(?,?,curdate())", [content, nid])
        .then((result) => "success")

}

export async function getReplys(nid) {

    return db.execute("select * from news_reply where nid = ?", [nid])
        .then((result) => result[0])

}




