import styled from "styled-components";

import Header from "../components/Header";
import CategoryHeader from "../components/Community/CategoryHeader";
import ViewPostItem from "../components/Post/ViewPostItem";
import CommentItem from "../components/Post/CommentItem";
import Idcheck from "../assets/idcheck.png"
import Footer from "../components/Footer";

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { commentData } from "../datas/comment";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const PostContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
`;

const CommentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
`;

const NewCommentContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-bottom: 10px;
`;

const TextField = styled.textarea`
    background-color: #EDF1FE;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    resize: none;
    overflow: auto;
`;

const Button = styled.button`
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #93AAE5;
    border: none;
    border-radius: 8px;
    width: 80px;
    height: 40px;
`;

const SetSecret = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 40px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    -webkit-appearance: none;
    appearance: none;
    
    cursor: pointer;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    border: 3px solid #85A1E8;
    border-radius: 5px;

    &:checked {
        border-color: transparent;
        background-image: url(${Idcheck});
        background-size: 100%;
        background-repeat: no-repeat;
        border-color: #85A1E8;
        border-width: 3px;
    }
`;

function ViewPostPage({ category, login, setLogin }) {
    const location = useLocation();
    const [post, setPost] = useState(location.state?.post);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (post) {
            const postComments = commentData.find(comment => comment.postId === post.id);
            if (postComments) {
                setComments(postComments.comments);
            }
        }
    }, [post]);

    const handleComplete = () => {
        // 댓글 등록 버튼
        // 비밀댓글 여부
    };

    const handleLike = () => {
        if (post) {
            setPost(prevPost => ({ ...prevPost, like: prevPost.like + 1 }));
        }
    };

    return(
        <Wrapper>
            <Header text="커뮤니티" login={login} setLogin={setLogin}/>
            <CategoryHeader category={category}/>

            <PostContainer>
                <ViewPostItem post={post} onLike={handleLike}/>
            </PostContainer>

            <CommentList>
                {comments.map(comment => (
                    <CommentItem
                        key={comment.id}
                        userName={comment.userName}
                        profileImage={comment.profileImage}
                        content={comment.content}
                        date={comment.date}
                    />
            </CommentList>

            <NewCommentContainer>
                <TextField
                    placeholder="댓글을 입력하세요."
                ></TextField>
                <Button
                    onClick={handleComplete}
                >등록</Button>
            </NewCommentContainer>
            <SetSecret>
                <Checkbox
                    //checked={isPrivate}
                    //onChange={() => setIsPrivate(!isPrivate)}
                />
                비밀댓글
            </SetSecret>
            <Footer></Footer>
        </Wrapper>
    );
}

export default ViewPostPage;