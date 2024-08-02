import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import reset from "styled-reset";
import Mainpage from "./pages/Mainpage";
import MyPage from "./pages/MyPage"; // MyPage를 올바르게 가져오기
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import WritingsPage from "./pages/WritingsPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PwFind from "./pages/PwFind";
import Communitypage from "./pages/Communitypage";
import Culturelistpage from "./pages/Culturelistpage";
import NewPostPage from "./pages/NewPostPage";
import ViewPostPage from "./pages/ViewPostPage";
import LikesPage from "./pages/LikesPage";

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
  const [login, setLogin] = useState(false);

  


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Mainpage login={login} setLogin={setLogin} />}></Route>
        <Route path="/myPage" element={<MyPage login={login} setLogin={setLogin}/>}></Route>
        <Route path="/typeTest/:questionNumber" element={<TestPage />} />
        <Route path="/typeTest/result/:resultId" element={<ResultPage />} />
        <Route path="/pw-find" element={<PwFind />}></Route>
        <Route path="/myWritings" element={<WritingsPage />} />
        <Route path="/myLikes" element={<LikesPage />} />
        <Route path="/sign-up" element={<SignUp login={login} />}></Route>
        <Route
          path="/login"
          element={<Login login={login} setLogin={setLogin} />}
        ></Route>
        <Route path="/pw-find" element={<PwFind />}></Route>
        <Route
          path="/community"
          element={<Communitypage category="전체" />}
        ></Route>
        <Route
          path="/community/performance"
          element={<Communitypage category="공연" />}
        ></Route>
        <Route
          path="/community/exhibition"
          element={<Communitypage category="전시" />}
        ></Route>
        <Route
          path="/community/sport"
          element={<Communitypage category="스포츠" />}
        ></Route>
        <Route
          path="/community/book"
          element={<Communitypage category="도서" />}
        ></Route>
        <Route
          path="/culturelist"
          element={<Culturelistpage category="전체" />}
        ></Route>
        <Route
          path="/culturelist/performance"
          element={<Culturelistpage category="공연" />}
        ></Route>
        <Route
          path="/culturelist/exhibition"
          element={<Culturelistpage category="전시" />}
        ></Route>
        <Route
          path="/culturelist/sport"
          element={<Culturelistpage page="culturelist" category="스포츠" />}
        ></Route>
        <Route
          path="/culturelist/book"
          element={<Culturelistpage page="culturelist" category="도서" />}
        ></Route>
        <Route path="/new-post" element={<NewPostPage />}></Route>
        <Route path="/view-post" element={<ViewPostPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
