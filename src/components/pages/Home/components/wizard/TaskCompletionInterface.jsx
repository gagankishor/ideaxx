
const TaskCompletionInterface = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Earn more attempts</h2>

      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Daily Check-in Task</h3>
            <p className="text-gray-600">Login to the home page</p>
          </div>
          <span className="text-yellow-500 font-bold">+1</span>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Trading Task</h3>
            <p className="text-gray-600">Accumulate at least $5,000 equivalent in trading volume</p>
          </div>
          <span className="text-yellow-500 font-bold">+2</span>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Refer a Friend</h3>
            <p className="text-gray-600">Refer a friend to join the platform</p>
          </div>
          <span className="text-yellow-500 font-bold">+3</span>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Sharing Task</h3>
            <p className="text-gray-600">Share your achievement with your friends</p>
          </div>
          <span className="text-yellow-500 font-bold">+1</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCompletionInterface;