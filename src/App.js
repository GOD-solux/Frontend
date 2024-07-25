import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Mainpage from "./pages/Mainpage";
import MyPage from "./pages/MyPage"; // MyPage를 올바르게 가져오기
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import WritingsPage from "./pages/PlusBtnPages/WritingsPage";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box; 
  }
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  #root {
    width: 80%;
    // border: 1px solid gray;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route 
          path="/myPage"
          element={<MyPage login={true}/>}>
          </Route>
          <Route path="/typeTest/:questionNumber" element={<TestPage />} />
          <Route path="/typeTest/result/:resultId" element={<ResultPage/>} />
          //비밀번호 변경 
          {/* <Route 
          path="/pw-find" element={<PwFind />}
        ></Route> */}
        {/* <Route
          path="/myWritings" element={<WritingsPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
