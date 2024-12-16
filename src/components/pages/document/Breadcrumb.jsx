import Link from "next/link";
import PropTypes from "prop-types";

const Breadcrumb = ({ items }) => {
  return (
    <dev className="flex items-center space-x-2 py-4 text-sm text-gray-400">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="text-green-400 text-lg">
              {item.label}
            </Link>
          ) : (
            <span className="text-white text-lg">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-gray-100 text-lg">›</span>
          )}
        </div>
      ))}
    </dev>
  );
};
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};
export default Breadcrumb;