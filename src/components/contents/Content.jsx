const Component = () => {
  return (
    <div className="Component-container px-4 lg:px-20 py-10">
      <div className="Component-image mb-10">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          src="/ComponentImg.png"
          alt="Component Cover"
        />
      </div>

      <div className="author-info flex items-center gap-6 mb-8">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src="/user.png"
          alt="Author"
        />
        <div className="text">
          <h2 className="text-xl font-semibold text-purple-700">Andrew Jonson</h2>
          <span className="text-sm text-gray-500">Componented on 27th January 2022</span>
        </div>
      </div>

      <h1>Step-by-step guide to choosing great font pairs</h1>

      <div className="tags mt-6 mb-8">
        <span className="tag bg-yellow-300 text-black px-3 py-1 rounded-full mr-2">#business</span>
        <span className="tag bg-red-400 text-white px-3 py-1 rounded-full mr-2">#screen</span>
        <span className="tag bg-blue-600 text-white px-3 py-1 rounded-full">#life</span>
      </div>

      <div className="Component-content text-gray-600 leading-7">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
        </p>
        <p className="mb-4">
          Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
        </p>
      </div>
    </div>
  );
};

export default Component;
