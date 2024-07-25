import styled from "styled-components";

import Header from "../components/Header";
import CategoryHeader from "../components/Community/CategoryHeader";
import ViewPostItem from "../components/Post/ViewPostItem";
import CommentItem from "../components/Post/CommentItem";

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
        background-color: #93AAE5;
    }
`;

function ViewPostPage({ category }) {
    //const [comment, setComment] = useState('');
    //const [isPrivate, setIsPrivate] = useState(false);

    const handleComplete = () => {
        // 댓글 등록 버튼
        // 비밀댓글 여부
    };

    return(
        <Wrapper>
            <Header/>
            <CategoryHeader category={category}/>

            <PostContainer>
                <ViewPostItem/>
            </PostContainer>

            <CommentList>
                <CommentItem/>
                <CommentItem/>
            </CommentList>

            <NewCommentContainer>
                <TextField
                    placeholder="댓글을 입력하세요."
                    //value={comment}
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
        </Wrapper>
    );
}

export default ViewPostPage;