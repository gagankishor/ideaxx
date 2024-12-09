import PropTypes from 'prop-types';

export default function ArticleCard({ title, category, imageUrl,hrefUrl }) {
    return (
      <div className="group bg-gray-50   overflow-hidden ">
        <div className="relative h-72 w-full">
          <a href={hrefUrl?hrefUrl:"/blog/2"} className=" cursor-pointer">
          <img
            src={imageUrl}
            // src="https://static.wixstatic.com/media/a77aa0_93b94d3603104f23955bf641a28bccbc~mv2.png"
            
            alt={title}
            className="w-full h-full object-cover"
            />
            </a>
        </div>     
        <div className="py-8">
          <p className="text-sm text-left text-gray-500 font-medium uppercase">
            {category}
          </p>
          <a href={hrefUrl?hrefUrl:"/blog/2"} className="text-lg text-left font-thin underline text-gray-800 group-hover:text-gray-950 transition-colors">
            {title}
          </a>
        </div>
      </div>
    );
  }
  ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    hrefUrl:PropTypes.string.isRequired,
  };