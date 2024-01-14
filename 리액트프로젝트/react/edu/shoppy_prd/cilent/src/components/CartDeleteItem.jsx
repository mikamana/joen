import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { cartDeleteBtn } from '../API/cartDeleteAPI';
import { useDispatch } from 'react-redux';

export default function CartDeleteItem({ userInfo, cid }) {

  const buttonRef = useRef(null);

  const dispatch = useDispatch();

  const handleDelete = () => {

    const check = window.confirm("정말로 삭제하시겠습니까?")

    if (check) {
      dispatch(cartDeleteBtn(userInfo, cid));
      // dispatch가 호출하는 형태가 함수이면 스토어에 보내지않는다.
      // dispatch가 호출하는 형태가 객체이면 store에 데이터를 보낸다.
    } else {
      alert("삭제를 취소하였습니다.")
    }

  }

  // useCartDeleteItem(buttonRef, userInfo, cid)
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
        onClick={handleDelete}
      >삭제
      </Button>
    </>
  );
}

