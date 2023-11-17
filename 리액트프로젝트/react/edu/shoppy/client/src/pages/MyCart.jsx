import React from "react";
import { getUser, removeUser } from "../util/localStorage";
export default function MyCart() {

  const userInfo = getUser();

  return (
    <>
      {userInfo ? (<div>myCart!!</div>) : (<div>잘못된 경로로 접속하셨습니다.</div>)}
      {/* 컴포넌트 자체에서 체크를 진행 */}
    </>
  );



}