import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from "../components/Header";
import FileUpload from '../components/Post/FileUpload';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
    position: relative;
    padding-bottom: 100px;
`;

const Text = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
`;

const TextInput = styled.textarea`
    font-size: 15px;
    padding: 10px;
    background-color: #EDF1FE;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    height: ${props => props.height || 'auto'};
    resize: none;
    overflow: auto;
`;

const FileUploadWrapper = styled.div`
    margin-bottom: 20px;
`;

const HashTagWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 50px;
`;

const HashTag = styled.button`
    cursor: pointer;
    font-size: 15px;
    background-color: #EDF1FE;
    border: none;
    border-radius: 20px;
    padding: 5px 15px;

    transition: background-color 0.3s ease;
    &:hover {
        background-color: #DEE1EA;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    width: 100px;
    height: 35px;
    color: ${props => props.color || 'white'};
    background-color: ${props => props.background || 'lightgray'};
    
    transition: filter 0.3s ease;
    &:hover {
        filter: brightness(95%);
    }
`;

function NewPostPage(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCancel = () => {
        if (window.confirm('글 작성을 취소하시겠습니까?')) {
            navigate('/community');
        }
    };
    
    const handleComplete = () => {
        navigate('/view-post');
    };

    return (
        <Wrapper>
            <Header text="글쓰기" />
            <Text>제목</Text>
            <TextInput
                height="40px"
                maxLength="30"
                value={title}
                onChange={(event) => {
                setTitle(event.target.value);
                }}
            />

            <Text>내용</Text>
            <TextInput
                height="300px"
                maxLength="500"
                value={content}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
            />

            <Text>첨부파일</Text>
            <FileUploadWrapper>
                <FileUpload/>
            </FileUploadWrapper>

            <Text>해시태그</Text>
            <HashTagWrapper>
                <HashTag>#맛집</HashTag>
                <HashTag>#동행</HashTag>
                <HashTag>#비추</HashTag>
                <HashTag>#추천</HashTag>
                <HashTag>#후기</HashTag>
            </HashTagWrapper>

            <ButtonWrapper>
                <Button
                    onClick={handleCancel}
                    color="#5E5E5E"
                    background="#E1E1E1"
                >취소</Button>
                <Button
                    onClick={handleComplete}
                    color="#FFFFFF"
                    background="#93AAE5"
                >완료</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}

export default NewPostPage;