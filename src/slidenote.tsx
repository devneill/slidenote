import React from 'react';
import { cn } from './utils.js';
import 'style.css';
import type { ComponentProps } from 'react';

type SlidenoteProps = ComponentProps<'div'> & {
  from: 'left' | 'right';
};

export function Slidenote({ from, children, ...rest }: SlidenoteProps) {
  return (
    <div
      className={cn(
        'slide w-56 h-36 bg-secondary p-6 flex flex-col justify-between',
        {
          'left rounded-r-2xl': from === 'left',
          'right rounded-l-2xl': from === 'right',
        },
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
