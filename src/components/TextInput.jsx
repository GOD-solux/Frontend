import React from "react";
import styled from "styled-components";
import Id from "../assets/TextInputimg/id.png";
import Pw from "../assets/TextInputimg/pw.png";
import Button from "./Button";
import {useState} from "react";
import Modal from "../components/Modal";

const Wrapper = styled.div`
    width: 350px;
    height: 45px;
    background-color: #EEEEEE;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
`;


const Textarea = styled.input`
    font-size: 16px; 
    border: none;
    border-radius: 15px;
    resize: none;
    background-color: #EEEEEE;
    width: 300px; 
    outline: none;
      
    // &::placeholder {
    //   font-size: 13px; 
    //   color: #9E9E9E;
    //   //background: url(${props => props.img || Id}) no-repeat left center; 
    //   background-size: contain; // 이미지 크기 조정
    //   padding-left: 30px; // 이미지와 텍스트 사이 여백
    //   line-height: 1.5;  //텍스트와 이미지 세로 정렬
    // }

`;


function TextInput({type, img, placeholder, value, maxLength, withButton, onChange}){
    //const [state, setState]= useState();

   // const { type, img, placeholder, value, maxLength} = props;

   const [showModal, setShowModal] = useState(false);

   const IdAvailability = () => {
    // axios
    //   .post('http://localhost:3000/auth/sign-up', { id })
    //   .then((response) => {
    //     if (response.data.available) {
    //       setModalMessage("사용 가능한 아이디입니다.");
    //   //   } else {
    //   //     setModalMessage("중복된 아이디가 존재합니다.");
    //   //   }
    //     setShowModal(true);
      // })
      // .catch((error) => {
      //   console.error('중복 확인 오류:', error);
      // });
    //   alert('사용 가능한 아이디입니다.');
    setShowModal(true);

      
  };


    return(
    
        <Wrapper>
            <Icon src={img}/>
            <Textarea
                type={type}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
            >      
            </Textarea>
            {withButton ? <Button
                title="중복확인"
                width="60px"
                height="15px"
                fontSize="12px"
                borderRadius="5px"
                onClick={IdAvailability} 
                >
            </Button> : null }

            {showModal && <Modal message='사용 가능한 아이디입니다.' onClick={() => setShowModal(false)}/>}
        </Wrapper>
        
    );
}

export default TextInput;