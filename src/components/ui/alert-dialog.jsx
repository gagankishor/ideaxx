import React from 'react';

export const AlertDialog = ({ open, onOpenChange, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? 'flex' : 'hidden'} justify-center items-center bg-black bg-opacity-50`}
      role="dialog"
      aria-modal="true"
    >
      {children}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => onOpenChange && onOpenChange(false)}
      />
    </div>
  );
};

export const AlertDialogContent = ({ className, children }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden p-6 z-10 ${className}`}
      role="document"
    >
      {children}
    </div>
  );
};
export const AlertDialogHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};
export const AlertDialogTitle = ({ className, children }) => {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
};