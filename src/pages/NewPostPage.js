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
    margin-top: ${(props) => props.marginTop || '0px'};
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
    background-color: ${props => (props.active ? '#DEE1EA' : '#EDF1FE')};
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

    //const [title, setTitle] = useState('');
    //const [content, setContent] = useState('');
    const [activeTags, setActiveTags] = useState({});

    const handleCancel = () => {
        if (window.confirm('글 작성을 취소하시겠습니까?')) {
            navigate('/community');
        }
    };
    
    const handleComplete = () => {
        navigate('/community');
    };

    const toggleHashTag = (tag) => {
        setActiveTags((prev) => ({
            ...prev,
            [tag]: !prev[tag]
        }));
    };

    const hashTags = ['#맛집', '#동행', '#비추', '#추천', '#후기'];

    return (
        <Wrapper>
            <Header text="글쓰기" login={props.login} setLogin={props.setLogin}/>
            <Text marginTop="20px">제목</Text>
            <TextInput
                height="40px"
                maxLength="30"
                //value={title}
                // onChange={(event) => {
                //     setTitle(event.target.value);
                // }}
            />

            <Text>내용</Text>
            <TextInput
                height="300px"
                maxLength="500"
                //value={content}
                // onChange={(event) => {
                //     setContent(event.target.value);
                // }}
            />

            <Text>첨부파일</Text>
            <FileUploadWrapper>
                <FileUpload/>
            </FileUploadWrapper>

            <Text>해시태그</Text>
            <HashTagWrapper>
                {hashTags.map(tag => (
                    <HashTag
                        key={tag}
                        active={activeTags[tag]}
                        onClick={() => toggleHashTag(tag)}
                    >
                        {tag}
                    </HashTag>
                ))}
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