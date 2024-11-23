import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UPLOAD_IMAGE_URL } from '../../utils/constants';

const ComponentItem = ({ category, description, title, photo, _id }) => {
  const imageUrl = `${UPLOAD_IMAGE_URL}${photo._id}.${photo.name.split('.')[1]}`;

  return (
    <div className="post-item grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <div className="post-image">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="post-content flex flex-col justify-between">
        <span className="text-[#592EA9] font-semibold text-sm tracking-wider uppercase mb-4">
          {category.name}
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {title}
        </h3>

        <p className="text-gray-600 text-base leading-6 mb-6">
          {description}
        </p>

        <Link
          to={`/blog/${_id}`}
          className="inline-flex items-center gap-2 text-white bg-[#FFD050] py-2 px-4 rounded-md shadow hover:bg-[#e6c442] transition-all"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ComponentItem;