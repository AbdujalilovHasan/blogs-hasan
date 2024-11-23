import defaultImage1 from '../../assets/images/about1.png';
import defaultImage2 from '../../assets/images/about2.png';

const AboutPosts = ({ first_text, text, title, subtitle, shapes, img, useSecondImage }) => {
  const defaultImage = useSecondImage ? defaultImage2 : defaultImage1;

  return (
    <div
      className={`mt-20 flex flex-col ${
        !first_text ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-16 mb-24 px-6 md:px-12 lg:px-24 md:gap-24`}
    >
      <div className="flex-1">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">{title}</h2>
        <h1 className="text-xl text-gray-800 font-bold mb-4">{text}</h1>
        <p className="text-gray-600 text-base leading-7">{subtitle}</p>
      </div>
      <div className="flex-1 relative">
        <div className={shapes}></div>
        <img
          className="w-full h-auto"
          src={img || defaultImage} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage; 
          }}
        />
      </div>
    </div>
  );
};

export default AboutPosts;