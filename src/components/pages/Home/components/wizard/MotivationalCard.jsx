import  { useState } from 'react';

const MotivationalCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        onClick={togglePopup}
        type='button'
      >
        Don&rsquo;t give up!
      </button>

      {showPopup && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-center">
                <svg className="h-16 w-16 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">Don&rsquo;t give up!</h2>
              <p className="text-gray-600 mt-2">You have tried so hard to achieve your goals.</p>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                  Get More Attempts
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                  Share my achievement
                </button>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                onClick={togglePopup}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MotivationalCard;