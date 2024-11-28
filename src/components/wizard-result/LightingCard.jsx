import { Activity } from "lucide-react";

const LightingCard = ({ consumption }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="space-y-3">
          <h2 className="text-gray-800 text-sm font-medium tracking-wider">
            {consumption.title}
            {/* <br /> */}
            {/* CONSUMPTION AND COSTS */}
          </h2>
  
          <div className="flex items-center space-x-4">
            {/* Left side with percentage and watts */}
            <div className="flex items-center space-x-2">
              {/* Vertical progress bar */}
              <div className="relative w-3 h-24 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 w-full bg-green-400 rounded-full transition-all duration-300"
                  style={{ height: `${consumption.percentage}%` }}
                />
                {/* Activity indicator */}
                <div className="absolute -right-2 top-0">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex-grow">
              {/* Percentage */}
              <div className="text-gray-800 text-4xl font-semibold mb-1">
                {consumption.percentage}%
              </div>
  
              {/* Current consumption */}
              <div className="flex items-baseline space-x-1">
                <span className="text-gray-600 text-xs"></span>
                <span className="text-gray-800 text-xl font-semibold ml-1">
                  {consumption.currentWatts}
                </span>
                <span className="text-gray-600 text-sm"></span>
              </div>
            </div>
            <Activity size={16} className="text-gray-600" />
          </div>
        </div>
      </div>
    );
  };
export default LightingCard;
  