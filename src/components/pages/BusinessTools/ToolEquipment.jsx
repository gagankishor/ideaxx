

export const ToolEquipment = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              {/* <Tools className="w-6 h-6 text-blue-600" /> */}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Business Tools
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features to help your business grow and succeed
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border ">
            <div className="space-y-6">
              <div className="flex justify-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                  Coming Soon
                </span>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-5xl">🚧</span>
                </div>
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Were Building Something Amazing
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Our team is working hard to bring you powerful business tools that will transform how you work. Stay tuned for the launch!
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 mt-8">
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  Get Notified
                </button> */}
                <p className="text-sm text-gray-500">
                  Well let you know as soon as its ready
                </p>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Have questions? Contact our support team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolEquipment;