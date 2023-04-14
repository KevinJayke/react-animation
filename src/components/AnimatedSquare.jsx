import { useSpring, animated, useSpringRef } from "@react-spring/web";
import styled from "styled-components";

const Square = styled(animated.div)`
  width: 80px;
  height: 80px;
  background-color: #ff6d6d;
  border-radius: 8px;
  cursor: pointer;
`;

const AnimatedSquare = () => {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { x: 0 },
  });

  const handleClick = () => {
    const isEndingPosition = springs.x.get() === 200;

    api.start({
      to: {
        x: isEndingPosition ? 0 : 200,
      },
    });
  };

  return (
    <Square
      onClick={handleClick}
      style={{
        ...springs,
      }}
    />
  );
};

export default AnimatedSquare;
