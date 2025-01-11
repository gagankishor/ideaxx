import { useState } from 'react';
import { Link2 } from 'lucide-react';

const WebsitePreview = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setWebsiteUrl(url);
    setIsValidUrl(validateUrl(url));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[500px] h-[600px]">
      {!isValidUrl ? (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="text-gray-500 flex items-center gap-2 mb-3">
            <Link2 className="w-5 h-5" />
            <span>No website yet</span>
          </div>
          <div className="w-full max-w-sm">
            <input
              type="url"
              value={websiteUrl}
              onChange={handleUrlChange}
              placeholder="Enter website URL (https://...)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <input
              type="url"
              value={websiteUrl}
              onChange={handleUrlChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button
              onClick={() => setWebsiteUrl('')}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              Edit
            </button>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={websiteUrl}
              title="Website Preview"
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsitePreview;