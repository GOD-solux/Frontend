import styled from "styled-components"


const StyleBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 20px 40px;
    background-color : transparent;
    border: 3px solid #85A1E8;
    border-radius : 7px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    gap: 15px;
`;

function Box(props){

    return(
        <StyleBox>
            {props.children}
        </StyleBox>
    )
}

export default Box;