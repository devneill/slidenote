import React from 'react';
import { cn } from './utils.js';
import './style.css';
import type { ComponentProps } from 'react';

type SlidenoteProps = ComponentProps<'div'> & {
  from: 'left' | 'right';
  className?: string;
};

export function Slidenote({
  from,
  className,
  children,
  ...rest
}: SlidenoteProps) {
  return (
    <div
      className={cn(
        'slide',
        {
          left: from === 'left',
          right: from === 'right',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
