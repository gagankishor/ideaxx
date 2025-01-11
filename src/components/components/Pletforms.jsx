import PropTypes from 'prop-types';

export const Pletforms = ({ platforms, title }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">{title}</h2>
        
        <div className="flex flex-wrap gap-8 items-center">
          {platforms.map((item) => (
            <div 
              key={item.id} 
              className="w-[170px] sm:w-[170px] flex-shrink-0"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-[170px] bg-gray-100 rounded-xl hover:rounded-3xl transition-all duration-400 flex items-center justify-center"
              >
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="w-4/5 h-[90%] object-contain drop-shadow-lg filter"
                />
              </a>
              <p className="text-center mt-4 transition-colors duration-400 group-hover:text-primary">
                {item.name}
              </p>
            </div>
          ))}
        </div> 
    </>
  );
};

Pletforms.propTypes = {
  platforms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
};