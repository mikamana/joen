import * as replyRepository from "../repository/replyRepository.js";


export async function createReplys(req, res) {

    const { content, nid } = req.body

    console.log(req.body);
    const result = await replyRepository.createReplys(content, nid)

    if (result === "success") {

        res.status(204);

    }

}

export async function getReplys(req, res) {

    const { nid } = req.params
    // JSON.stringify(nid)
    // console.log(JSON.parse(nid));
    console.log(nid);
    const result = await replyRepository.getReplys(nid)

    res.json(result)

}

