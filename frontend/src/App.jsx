import { styled } from "styled-components";
import Navigation from "./components/navigation/Navigation";
import { MainLayout } from "./styles/layouts";
import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Income from "./components/income/Income";
import Expenses from "./components/expenses/Expenses";
import Profile from "./components/profile/Profile";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
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
    border: 1px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 20px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
