const AboutHero = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row gap-10 bg-gray-50 p-8 md:p-16 rounded-lg shadow-sm">
      <div className="flex-1">
        <h2 className="text-sm text-gray-8000 font-bold font-semibold tracking-wider uppercase mb-4">
          Our Mission
        </h2>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Creating valuable content for creatives all around the world
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec scelerisque viverra.
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-sm text-gray-8000 font-bold font-semibold tracking-wider uppercase mb-4">
          Our Vision
        </h2>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          A platform that empowers individuals to improve the world
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec scelerisque viverra.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;