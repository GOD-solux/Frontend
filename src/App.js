import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Mainpage from "./pages/Mainpage";
import Communitypage from "./pages/Communitypage";
import Culturelistpage from "./pages/Culturelistpage";

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
    //임시 너비
    width: 80%;

    //border: 1px solid gray;
    
  }
  ::-webkit-scrollbar {
    display:none;
  }
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Mainpage login={false} />}></Route>
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
        <Route path="/culturelist" element={<Culturelistpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
