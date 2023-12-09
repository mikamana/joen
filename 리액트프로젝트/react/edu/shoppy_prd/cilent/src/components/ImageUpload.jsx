import React from "react";
import { Form } from "react-bootstrap"
import axios from "axios";

export default function ImageUpload({ getImage }) {
    const formData = new FormData();
    // FormData 객체를 생성하고 변수에 데이터를 저장한다.
    const FileUpload = (e) => {

        formData.append("file", e.target.files[0])
        // 콜백함수 첫번째 인자는 'file'이다.
        for (const key of formData) console.log(`key---->>> ${JSON.stringify(key)}`);

        //선택한 파일을 서버로 전송
        axios.post('http://127.0.0.1:8000/upload', formData)
            .then((result) => {
                getImage(result.data);
            });

    }

    return (
        <div>
            <Form.Control
                type='file'
                className='shadow-none'
                accept='image/*'
                onChange={(e) => { FileUpload(e) }}>
            </Form.Control>
            {/* 부트스트랩으로 form을 만들고 Fileupload 함수에 속성값과 onChange 이벤트를 보낸다. */}
        </div>
    )
}