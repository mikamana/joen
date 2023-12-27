import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import useCartDeleteItem from '../hooks/useCartDeleteItem';

export default function CartDeleteItem({ userInfo, cid }) {


  const buttonRef = useRef(null);


  useCartDeleteItem(buttonRef, userInfo, cid)
  // 파라미터로 useHook에 넘겨주어 연결시킨다.
  // onClick은 순수 자바스크립트 함수이기 떄문에 useCustomHook에 직접 접근을 못한다.
  // 해결 방법은 ref로 요소를 찾고 해당 요소를 useCustomHook에 파라미터로 넘겨주어 연결시켜준다.
  return (
    <>
      <Button
        variant="danger"
        type="button"
        className="delete_style"
        ref={buttonRef}
      >삭제
      </Button>
    </>
  );
}

