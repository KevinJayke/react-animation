import styled from "styled-components";
import Polygon from "../assets/svg/Polygon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnimatedShape = () => {
  return (
    <Wrapper>
      <Polygon />
    </Wrapper>
  );
};

export default AnimatedShape;
