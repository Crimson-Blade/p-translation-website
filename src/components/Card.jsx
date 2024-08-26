import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      textAlign: `center`,
      fontSize: `0.7rem`,
      padding: `0.8rem 0`,
      fontWeight: `500`,
      boxShadow: `0 0.25rem 0.5rem rgba(0, 0, 0, 0.10)`
    }}
  >
    {children}
  </div>
);

export default Card;