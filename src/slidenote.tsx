import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { type ComponentProps } from 'react';
import React from 'react';
import { cn } from './utils.js';

type SlidenoteProps = ComponentProps<'div'> & {
  from?: 'left' | 'right';
  className?: string;
};

export function Slidenote({
  from = 'right',
  className,
  children,
}: SlidenoteProps) {
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 600,
    damping: 90,
  });

  const range = from === 'right' ? [300, 0] : [-300, 0];
  const translateX = useTransform(smoothScrollProgress, [0.7, 0.8], range);

  return (
    <motion.div
      className={cn(
        'fixed bottom-1/3',
        {
          'left-0': from === 'left',
          'right-0': from === 'right',
        },
        className,
      )}
      style={{ x: translateX }}
    >
      {children}
    </motion.div>
  );
}
