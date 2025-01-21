import PropTypes from "prop-types";
const LightingCard = ({ consumption }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto sm:mx-0">
      <div className="space-y-3">
        <h2 className="text-gray-800 text-base font-medium tracking-wider text-center sm:text-left">
          {consumption.title}
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative w-3 h-24 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="absolute bottom-0 left-0 w-full bg-green-400 rounded-full transition-all duration-300"
                style={{ height: `${consumption.percentage}%` }}
              />
              <div className="absolute -right-2 top-0">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center justify-center sm:justify-start space-x-1">
              <span className="text-gray-800 text-xl font-semibold">
                {consumption.currentWatts}
              </span>
              <span className="text-gray-600 text-sm"></span>
            </div>
          </div>
          <img src={consumption?.imageUrl} className="mx-auto w-14  text-[#686868]" alt={consumption.title} />
        </div>
      </div>
    </div>
  );
};
LightingCard.propTypes = {
  consumption: PropTypes.shape({
    title: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    currentWatts: PropTypes.number.isRequired,
    imageUrl: PropTypes.number.isRequired,
  }).isRequired,
};
export default LightingCard;