import styled from "styled-components";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js"


const Container = styled.div`
display: flex
`

function App() {
  return (
   <Container>
    {/* <Main> */}
      <Navbar/>
      {/* <Wrapper> */}

    
    <BrowserRouter>
    <Routes>
      <Route></Route>
    </Routes>
    </BrowserRouter>
      {/* </Wrapper>
    </Main> */}
    

   </Container>
  );
}

export default App;
