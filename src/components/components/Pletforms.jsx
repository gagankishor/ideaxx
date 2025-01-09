import PropTypes from 'prop-types';

export const Pletforms = ({ platforms, title }) => {
  return (
    <>
      <h2 id="section-heading" style={{ marginTop: '40px' }}>{title}</h2>
      <div className="slider">
        {platforms.map((item) => {
          return (
            <div className="card" key={item.id}>
              <a
                href={item.link}
                target="_blank"
                className="item"
              >
                <img src={item.logo} alt={item.name} />
              </a>
              <p>{item.name}</p>
            </div>
          );
        })}
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