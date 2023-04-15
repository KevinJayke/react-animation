import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HiddenSquare = styled.div`
  background: radial-gradient(
    circle,
    rgba(201, 196, 199, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: -1;
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
`;

const Square = styled(motion.div)`
  position: relative
  margin-top: 20px;
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  cursor: pointer;
`;

const transition = {
  firstShape: {
    type: "spring",
    bounce: 0.5,
    duration: 0.5,
  },
};

const variants = {
  firstShape: {
    stand: { x: 0 },
    rotate: { x: 100 },
  },
};

const AnimatedShape = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Wrapper>
      <Square
        initial="stand"
        color={"Tomato"}
        onClick={() => setIsClicked((prevIsClicked) => !prevIsClicked)}
        animate={isClicked ? "rotate" : "stand"}
        transition={transition.firstShape}
        variants={variants.firstShape}
        whileTap={{ scale: 0.9 }}
      />
      <HiddenSquare color="Brown" />
    </Wrapper>
  );
};

export default AnimatedShape;
