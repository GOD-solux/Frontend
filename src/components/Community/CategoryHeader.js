import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  margin: 20px 0;
`;

const CategoryText = styled.div`
  font-size: 20px;
  color: #464646;
  padding-bottom: 5px;

  cursor: pointer;
`;

const categoryList = [
  { name: "전체", path: "" },
  { name: "공연", path: "performance" },
  { name: "전시", path: "exhibition" },
  { name: "스포츠", path: "sport" },
  { name: "도서", path: "book" },
];

function CategoryHeader({ page, category }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {categoryList.map((v, i) =>
        v.name === category ? (
          <CategoryText
            key={i}
            onClick={() => navigate(`/${page}/${v.path}`)}
            style={{ fontWeight: "bold", borderBottom: "1px solid black" }}
          >
            {v.name}
          </CategoryText>
        ) : (
          <CategoryText key={i} onClick={() => navigate(`/${page}/${v.path}`)}>
            {v.name}
          </CategoryText>
        )
      )}
    </Wrapper>
  );
}

export default CategoryHeader;
