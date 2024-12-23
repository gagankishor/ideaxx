import Link from "next/link";
import PropTypes from "prop-types";

const PaginationButtons = ({previous,next}) => {
  return (
    <div className="flex justify-between items-center  py-4 rounded-lg">
      {previous?<Link
        href={`/documentation${previous?.href}`}
        className="px-5 border border-gray-700 p-2 rounded-lg hover:bg-gray-800 min-w-[45%] text-left"
      >
        <span className="text-white font-bold">Previous</span>
        <div className="flex items-center text-right justify-start text-teal-400 hover:text-teal-300">
        <span className="mr-2">&laquo;</span> {previous?.name}</div>
     </Link>:<div></div>}
        {next?
      <Link
        href={`/documentation${next?.href}`}
        className="px-5  border border-gray-700 p-2 rounded-lg hover:bg-gray-800 min-w-[45%] text-right"
      >
        <span className="text-white font-bold">Next</span>
        <div className="flex items-center text-right justify-end text-teal-400 hover:text-teal-300">
          {next?.name} <span className="ml-2">&raquo;</span>
      </div>
      </Link>:<div></div>}
    </div>
  );
};
PaginationButtons.propTypes = {
  previous: PropTypes.shape({
    href: PropTypes.string.isRequired, // `previous` must have a `href` property of type string
    name: PropTypes.string.isRequired, // `previous` must have a `name` property of type string
  }),
  next: PropTypes.shape({
    href: PropTypes.string.isRequired, // `next` must have a `href` property of type string
    name: PropTypes.string.isRequired, // `next` must have a `name` property of type string
  }),
};

export default PaginationButtons;