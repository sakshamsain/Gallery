import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function NavButton({ dir, active }) {
  const [left, setLeft] = useState(dir === 'left');
  const [rotate1, setRotate1] = useState(`rotate(${active * 90}deg)`);
  const [rotate2, setRotate2] = useState(`rotate(${90 + active * 90}deg)`);

  useEffect(() => {
    setRotate1(`rotate(${active * 90}deg)`);
    setRotate2(`rotate(${90 + active * 90}deg)`);
  }, [active]);

  const shrinkVariants = {
    hidden: { width: 0, x: 20, transition: { duration: 0.5, delay: 0.5 } },
    visible: { width: 20, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`text-4xl fixed top-0 w-1/2 h-full font-bold p-2 z-20 select-none cursor-auto ${left ? 'left-0' : 'right-0'}`}
    >
      <div className={`absolute ${left ? 'left-1/3' : 'right-1/3'} ${left ? '' : '-translate-x-5'} top-1/2`}>
        <motion.span
          className="bg-white/80 block h-[2px] w-5 absolute"
          style={{ transform: rotate1 }}
          variants={shrinkVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.span
          className="bg-white/80 block h-[2px] w-5 absolute"
          style={{ transform: rotate2 }}
          variants={shrinkVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
  );
}

export default NavButton;
