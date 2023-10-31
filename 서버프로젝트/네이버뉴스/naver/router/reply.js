import express from "express";


const router = express.Router()

const replyList = [];
router.use(express.urlencoded({ extended: true }));
router.use(express.json())

router.get("/:nid", (req, res, next) => {

    const nid = req.params.nid
    const data = replyList.filter(reply => reply.nid === nid);
    res.json(data)

})


router.post("/", (req, res, next) => {
    // 

    const { nid, name, replyContent } = req.body
    console.log(req.body);
    replyList.unshift({ nid, name, replyContent })
    res.status(201).send('create success!')

})


export default router;