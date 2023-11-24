import React from 'react';

const Pill = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <span
      className={['inline-block px-2 py-1 bg-blue-500 text-white rounded-xl text-xs uppercase', className].join(' ')}>
      {children}
    </span>
  );
};

Pill.displayName = 'Pill';
export { Pill };