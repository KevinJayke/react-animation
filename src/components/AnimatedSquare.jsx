import { motion } from "framer-motion";
import styled from "styled-components";

const Square = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: #ff6d6d;
  border-radius: 8px;
  cursor: pointer;
`;

const AnimatedMotion = () => {
  return (
    <Square
      whileTap={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    />
  );
};

export default AnimatedMotion;
