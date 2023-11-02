import { styled } from "styled-components";
import { MainLayout } from "./styles/layouts";

function App() {
  return (
    <AppStyle>
      <MainLayout>
        <h1>Hello World</h1>
      </MainLayout>
    </AppStyle>
  );
}

const AppStyle = styled.div`
   {
    height: 100vh;
    position: relative;
  }
`;

export default App;
