import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../components/hooks/useData';
import demoImage from '../../assets/images/hero.png';
import { UPLOAD_IMAGE_URL } from '../../utils/constants';

const Hero = () => {
  const { data } = useData('post/lastone');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    if (data?.image) {
      const img = new Image();
      img.src = `${UPLOAD_IMAGE_URL}${data?.image}`;
      img.onload = () => setBackgroundImage(`${UPLOAD_IMAGE_URL}${data?.image}`);
      img.onerror = () => setBackgroundImage(demoImage);
    } else {
      setBackgroundImage(demoImage);
    }
  }, [data]);

  return (
    <div
      className="bg-cover bg-center md:h-[720px] w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="pt-[124px] md:pt-[192px]">
          <p className="mb-3 sm:mb-6 text-inter text-[14px] font-semibold sm:text-base uppercase leading-5 tracking-[3px] text-white">
            Posted on <span className="font-black">{data?.category?.name}</span>
          </p>
          <h1 className="text-sen font-bold text-white text-[40px] sm:text-[54px] leading-[64px] mb-6 tracking-[-1px] custom:w-[803px]">
            {data?.title}
          </h1>
          <p className="text-inter font-normal leading-7 text-base text-white mb-4">
            By{' '}
            <span className="text-[#FFD050]">
              {data?.user?.first_name} {data?.user?.last_name}
            </span>
          </p>
          <p className="text-inter font-normal leading-7 text-base text-white mb-12 md:w-[599px]">
            {data?.category?.description}
          </p>
          <Link to={'/'}>
            <button className="mb-[100px] sm:mb-[192px] py-2 px-3 sm:py-4 sm:px-12 text-center bg-[#FFD050] rounded-md text-sen font-bold text-[18px] text-[#232536] leading-6">
              Read More {'>'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;