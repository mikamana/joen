import { db } from "../data/database.js";




export async function getNews() {

    return db.execute("select * from news_list")
        .then((result) => result[0])

}

export async function createNews(title, contents, url) {

    return db.execute("insert into news_list (title,contents,url) value(?,?,?)", [title, contents, url])
        .then((result) => "success")

}

export async function updateNews(contents, nid) {

    return db.execute("update news_list set contents = ? where nid = ? ", [contents, nid])
        .then((result) => "success")

}



