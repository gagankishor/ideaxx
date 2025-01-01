// src/app/linkedin/loading.js
export default function Loading() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Loading...
          </h2>
        </div>
      </div>
    );
  }