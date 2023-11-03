import { styled } from "styled-components";
import Navigation from "./components/navigation/Navigation";
import { MainLayout } from "./styles/layouts";
import { useState, useMemo } from "react";
import Orb from "./components/orb/Orb";

function App() {
  const [active, setActive] = useState(1);

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
