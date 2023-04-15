import styled from "styled-components";
import AnimatedShape from "./components/AnimatedShape";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

function App() {
  return (
    <Wrapper>
      <AnimatedShape text={"salut"} />
    </Wrapper>
  );
}

export default App;
