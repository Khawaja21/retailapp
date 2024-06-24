// import React from 'react';
// import { motion } from 'framer-motion';

// const AnimatedComponent: React.<FCAnimatedComponentProps> = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedComponent;
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
