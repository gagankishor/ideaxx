import  { useState } from 'react';
import './css/CardSlider.css';
import PropTypes from 'prop-types';

const CardSlider = ({cards,logo,onColorSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if(!cards?.length>0){

  
  cards = [
  
  { 
    id: 4, 
    image: '/cocacola.png', 
    color: ['#ED1C16', '#FFFFFF', '#000000']
  },
  { 
    id: 5, 
    image: '/microsoft.png', 
    color: ['#F25022', '#7FBA00', '#00A4EF', '#FFB900'] 
  },
  { 
    id: 6, 
    image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png', 
    color: ['#A2AAAD','#000000','#FFFFFF'] 
  },
  { 
    id: 7, 
    image: 'https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png', 
    color: ['#FFCC00', '#DA291C'] 
  },
  { 
    id: 8, 
    image: '/pepsi.png', 
    color: ['#004B93', '#E32934', '#FFFFFF'] 
  },
  { 
    id: 9, 
    image: 'https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo.png', 
    color: ['#000000', '#FFFFFF'] 
  },
  { 
    id: 10, 
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png', 
    color: ['#4285F4','#34A853','#FBBC05','#EA4335'] 
  },
  { 
    id: 1, 
    image: '/pampers.png', 
    color: ['#2B8C8C','#13B7B7','#fcba03'] 
  },
  { 
    id: 2, 
    image: '/fedex.png', 
    color: ['#1D0958','#DE4D31','#FBF8F7'] 
  },
  { 
    id: 3, 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png', 
    color: ['#4C93DA','#FBF8F7','#000000'] 
  }
];}

  

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 3 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={handlePrevClick}>
      &#11164;
      </button>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className={`card-slider ${
              index >= currentIndex && index < currentIndex + 3 ? 'active' : ''
            }`}
            key={card.id}
            style={{
              transform: `translateX(${(currentIndex - index) * 1}%)`,
              display: index >= currentIndex && index < currentIndex + 3 ? 'block' : 'none',
            }}
            onClick={() => onColorSelect(card?.color)}
          >
            <div className='sub-card'>
                <div className='logo-image'>
                    <img src= {logo ?logo:card.image}  />
                </div>
                <div className='logo-color'>
                    {card?.color?.map((color,index)=>(
                        <div className="sub-color" key={index}
                            style={{backgroundColor:color,justifyContent:'center',alignItems:'center' ,alignContent:'center',
                            
                            }}>
                                <div style={{width:'30%',height:'1px',backgroundColor:'white',marginLeft:'35%'}}></div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNextClick}>
        &#11166;
      </button>
    </div>
  );
};
// Define propTypes
CardSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      color: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
  logo: PropTypes.string,
  onColorSelect: PropTypes.func.isRequired,
};

// Define defaultProps (optional)
CardSlider.defaultProps = {
  cards: [],
  logo: '',
};
export default CardSlider;
