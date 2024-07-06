import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Mainpage from "./pages/Mainpage";

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

    border: 1px solid gray;
    
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
      </Routes>
    </Router>
  );
}

export default App;
