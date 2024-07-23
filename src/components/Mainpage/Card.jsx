import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const StyleCard = styled.div`
    background-color: white;
    border-radius: 10px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%;
    width: 100%; /* 카드 전체 너비 100%로 설정 */
    height: 200px; /* 높이 조정 */
    &:hover{
        box-shadow: rgba(165, 163, 163, 0.9) 0px 3px 5px 1px;
    }
    cursor: pointer;
 
`;

function Card(props){

    const navigate = useNavigate();
    const { title, className } = props;

    return(
        <StyleCard onClick={()=>{navigate(props.nav)}}
            className={className}
            title={title}
        >
        </StyleCard>
    )
}

export default Card;