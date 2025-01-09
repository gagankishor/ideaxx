import PropTypes from 'prop-types';

export const Blogs = ({ blogs, title }) => {
  return (
    <>
      <h2 id="section-heading" style={{ marginTop: '40px' }}>Blogs</h2>
      <div className="slider">
        {blogs.map((item) => {
          return (
            <div key={item.id} className="card">
              <a href={item.link} target="_blank" className="item">
                <img src={"/platforms/" + item.logo} alt={item.name} />
              </a>
              <p>{item.name} {title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};