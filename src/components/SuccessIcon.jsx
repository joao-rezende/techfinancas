import * as React from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Example({ animate }) {
  const pathLength = useMotionValue(0);

  return (
    <i>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path fill="#187033" d="M 50, 50 m -37.5, 0 a 37.5,37.5 0 1,0 75,0 a 37.5,37.5 0 1,0 -75,0" />
        <motion.path
          initial="closed"
          animate="open"
          transition={{ default: { delay: .50 } }}
          fill="transparent"
          strokeWidth="2.5"
          stroke="white"
          strokeDasharray="1 1"
          d="M27,52 L 43,68 L 73,38"
          style={{ pathLength }}
          variants={{
            closed: { pathLength: 0 },
            open: { pathLength: 1 }
          }}
        />
      </svg>
    </i>
  );
};
