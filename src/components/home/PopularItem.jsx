import { Link } from 'react-router-dom';
import { UPLOAD_IMAGE_URL } from '../../utils/constants'; 
import twoWomenImage from '../../assets/images/two-women.png'; 

const PopularItems = ({ title, author, description, image }) => {
  return (
    <div className="select-none mr-8">
      <img
        className="w-full rounded-md"
        src={image ? `${UPLOAD_IMAGE_URL}${image}` : twoWomenImage}
        alt={title || 'Card Image'}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = twoWomenImage; 
        }}
      />
      <div className="card-text mt-8 flex flex-col gap-4 justify-between">
        <p className="text-inter font-medium text-sm leading-5">
          By{' '}
          <Link className="text-blue-600">
            {author || 'Unknown Author'}
          </Link>
        </p>
        <h2 className="font-bold text-[22px] md:text-[24px] custom:text-[28px] md:leading-10 tracking-[-1px]">
          {title || 'No Title Available'}
        </h2>
        <p className="text-inter text-base leading-7 text-[#232536]">
          {description || 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default PopularItems;