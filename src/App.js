import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Mainpage from "./pages/Mainpage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PwFind from "./pages/PwFind";

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
        <Route 
          path="/" element={<Mainpage login={false} />}
        ></Route>
        <Route 
          path="/sign-up" element={<SignUp login={false} />}
        ></Route>
        <Route 
          path="/login" element={<Login login={false} />}
        ></Route>
        <Route 
          path="/pw-find" element={<PwFind />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
