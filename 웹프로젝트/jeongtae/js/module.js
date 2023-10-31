// import { fnEvent } from "./form2.js";


export const qysel = (qysel) => {

    return document.querySelector(qysel)

}

export const qyselAll = (qyselAll) => {

    return document.querySelectorAll(qyselAll)

}

export const adel = (node, event, e) => {

    return document.querySelector(node).addEventListener(event, e)

}
export const adelAll = (node, event, e) => {

    return document.querySelectorAll(node).forEach(n => {

        n.addEventListener(event, e)

    })

}




