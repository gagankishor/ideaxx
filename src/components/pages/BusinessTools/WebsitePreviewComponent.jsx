import { useState } from 'react';
import { Link2, Maximize2, Minimize2 } from 'lucide-react';

const WebsitePreview = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [scale, setScale] = useState(0.3); // Default scale
  
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

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 1));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.3));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[400px] h-[400px]">
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
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={handleZoomOut}
                className="p-1 hover:bg-gray-100 rounded"
                title="Zoom out"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1 hover:bg-gray-100 rounded"
                title="Zoom in"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 scrollbar-hover">
              <div style={{ 
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width: `${100/scale}%`,
                height: `${100/scale}%`
              }}>
                <iframe
                  src={websiteUrl}
                  title="Website Preview"
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts"
                  style={{
                    width: '1220px', // Desktop viewport width
                    height: '1080px', // Desktop viewport height
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsitePreview;