import { usePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

const Fade = ({ delay, duration, children }) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove, 1000);
  }, [isPresent, safeToRemove]);

  /** Render */
  return (
    <motion.div
      //key={key}
      key="12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
