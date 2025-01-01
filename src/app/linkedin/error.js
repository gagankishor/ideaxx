// src/app/linkedin/error.js
'use client';

export default function Error() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-red-600">
          Something went wrong
        </h2>
        <p className="text-gray-600">
          Please try logging in again.
        </p>
      </div>
    </div>
  );
}