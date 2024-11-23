import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UPLOAD_IMAGE_URL } from '../../utils/constants';
import { lazy } from 'react';

const ComponentItem = ({ category, description, title, photo, _id }) => {
  const imageUrl = `${UPLOAD_IMAGE_URL}${photo._id}.${photo.name.split('.')[1]}`;

  return (
    <div className="post-item flex grid  grid-cols-1 !gap-[35px] mt-10 md:grid-cols-2 gap-6 mb-16">
      <div className="post-image">
        <img
          src={imageUrl}
          alt={title}
          loading={lazy}
          className="w-full custom:w-[447px] h-[340px] object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="post-content justify-between">
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