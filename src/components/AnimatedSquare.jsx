import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";

const Square = styled(animated.div)`
  width: 80px;
  height: 80px;
  background-color: #ff6d6d;
  border-radius: 8px;
  cursor: pointer;
`;

const AnimatedSquare = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const [isReverse, setIsReverse] = useState(false);

  const handleClick = () => {
    if (!isReverse) {
      api.start({
        from: {
          x: 0,
        },
        to: {
          x: 100,
        },
      });
      setIsReverse(true);
    }
  };

  const handleClickReverse = () => {
    if (isReverse) {
      api.start({
        from: {
          x: 100,
        },
        to: {
          x: 0,
        },
      });
      setIsReverse(false);
    }
  };

  return (
    <Square
      onClick={isReverse ? handleClickReverse : handleClick}
      style={{
        ...springs,
      }}
    />
  );
};

export default AnimatedSquare;
