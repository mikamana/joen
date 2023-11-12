import * as newsRepository from "../repository/newsRepository.js";

export async function getNews(req, res) {

    const result = await newsRepository.getNews()

    res.json(result)

}

export async function createNews(req, res) {

    console.log(req.body);
    const { title, contents, url } = req.body

    const result = await newsRepository.createNews(title, contents, url)

    if (result === "success") {

        res.status(204);

    }

}


export async function updateNews(req, res) {


    const { contents, nid } = req.body

    const result = await newsRepository.updateNews(contents, nid)

    if (result === "success") {

        res.status(204)

    }

}