import express from "express";
import path from "path";
import { fileURLToPath } from 'url';


const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// console.log(__dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {

    res.sendFile(__dirname + "/index.html")
    // next()

})

// app.get("/:id", (req, res, next) => {

//     // console.log(req.query)
//     //form으로 get요청을 하면 params가 아닌 query로 넘어오게 된다.
//     console.log(req.params.id);
//     // res.sendFile(__dirname + "/admin.html")
//     // if (req.params.id === "try226") {

//     res.json({ message: "Admin Page" });
//     //     res.sendFile(__dirname + "/admin.html")

//     // } else {
//     //     res.json()
//     //     res.sendFile(__dirname + "/index.html")

//     // }


// })

// app.get("/:id", (req, res, next) => {

//     console.log("33");
//     if (req.params.id === "try226") {
//         // res.sendFile(__dirname + "/index.html")

//         // res.json({ memo: "33" })

//     } else {

//         res.json({ memo: "44" })

//     }

// })

app.post("/try226", (req, res, next) => {

    console.log(req.body.id);
    if (req.body.id == "try226") {

        res.sendFile(__dirname + "/admin.html")

    } else {

        res.redirect("/")

    }
    // res.sendFile(__dirname + "/index.html")

    // if (req.body.id === "try226") {

    //     res.json({ memo: "33" })

    // } else {

    //     res.json({ memo: "44" })

    // }

})

//Route parameters는 주로 동적인 세그먼트에서
// 데이터를 추출할 때 사용되며,
// query parameters는 일반적으로
// 검색 및 필터링과 같은 경우에 사용됩니다.


// app.post("/", (req, res, next) => {

//     console.log(req.body)
//     res.redirect("/")

// })


// "/" url에 있는 페이지 데이터를 주고나서
// 실행 할 기능이 있다면 next를 호출해야한다.
// next를 호출하지않으면 다음에 나오도록 하는 함수가 호출되지않는다

// crud메서드는 각 path에 맞는 함수로 동작한다.



// app.use(fnNext) // app.use()안에 주소를 기입하지 않으면 기본 값이 "/"이다.
// 즉 app.use(fnNext)는 app.get("/") 루트경로에 접속하면 실행할 함수는 fnNext가 된다.

// function fnNext(req, res, next) {



// }




app.listen(8080)