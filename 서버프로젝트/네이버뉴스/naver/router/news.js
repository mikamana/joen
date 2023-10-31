import express from "express";
import ejs from 'ejs';
const router = express.Router();
const newsList = [];
let num = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

router.use(express.urlencoded({ extended: true }));
// 인코딩 작업해줘야 req.body 문자로 받아서 인식함
router.use(express.json());

router.get('/', (req, res, next) => {

  const everydayList = newsList.filter(news => {

    if (news.channel === "매일경제") {

      return true;

    }

  })

  const combineList = newsList.filter(news => {

    if (news.channel === "연합뉴스") {

      return true;

    }

  })
  const chaAList = newsList.filter(news => {

    if (news.channel === "채널A") {

      return true;

    }

  })

  const peopleList = newsList.filter(news => {

    if (news.channel === "국민일보") {

      return true;

    }

  })

  const centerList = newsList.filter(news => {

    if (news.channel === "중앙일보") {

      return true;

    }

  })

  const HangList = newsList.filter(news => {

    if (news.channel === "한겨례") {

      return true;

    }

  })

  ejs.renderFile("./template/list.ejs", { everydayList, combineList, chaAList, peopleList, centerList, HangList })
    .then((result) => res.end(result))
    .catch()

})

router.get('/:nid', (req, res, next) => {

  const newsContentList = newsList.filter((news) => {

    if (news.nid === parseInt(req.params.nid)) {
      return true;
    }

  })[0];

  ejs.renderFile("./template/contents.ejs", { newsContentList })
    .then((result) => res.end(result))
    .catch(console.error)


})

router.post('/', (req, res, next) => {

  const nid = Math.floor(Math.random() * 1000);
  const { info, url, channel } = req.body;
  if (channel === '매일경제') {
    num++;
  }
  if (channel === '연합뉴스') {
    numTwo++;
  }
  if (channel === '채널A') {
    numThree++;
  }
  if (channel === '국민일보') {
    numFour++;
  }
  if (channel === '중앙일보') {
    numFive++;
  }
  if (channel === '한겨레') {
    numSix++;
  }
  newsList.push({ info, url, nid, num, channel, numTwo, numThree, numFour, numFive, numSix });
  console.log(newsList);
  res.redirect('/news');

})







export default router;