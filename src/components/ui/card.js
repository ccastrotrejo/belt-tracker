import React from 'react';

/**
 * A simple Card component inspired by shadcn/ui. It provides a white
 * background, rounded corners and a shadow. You can pass additional
 * Tailwind classes via the `className` prop. CardContent adds padding.
 */
export const Card = ({ children, className = '' }) => {
  return (
    <div className={'bg-white rounded-lg shadow-sm ' + className}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return <div className={'p-6 ' + className}>{children}</div>;
};

export default Card;
