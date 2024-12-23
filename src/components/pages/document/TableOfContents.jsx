import PropTypes from "prop-types";

const TableOfContents = ({ data }) => (
  <div className="bg-[#121212] hidden lg:block text-white p-6 h-screen sticky top-20 right-0 space-y-4 scrollbar-hover">
    <h2 className="text-lg font-bold">Table of Contents</h2>
    <ul className="space-y-4 text-lg">
      {data.map((section, index) => (
        <li key={index}>
          <a href="#" className="hover:text-white text-[#818384]">
            {section.title}
          </a>
          {section.links && (
            <ul className="space-y-2 ps-4 text-base">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="hover:text-gray-100 text-[#818384]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

TableOfContents.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default TableOfContents;
