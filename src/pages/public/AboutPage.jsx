import AboutHero from '../../components/about/AboutHero';
import AboutSection from '../../components/about/AboutPosts';

const AboutPage = () => {
  const sections = [
    {
      first_text: false,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      title: 'Our team of creatives',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      shapeStyle:
        'w-[90px] h-[120px] bg-[#FFD050] rounded-tl-[50px] absolute top-[80px] left-[-45px]',
      useSecondImage: false, 
    },
    {
      first_text: true,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      title: 'Why we started this Blog',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      shapeStyle:
        'w-[70px] h-[70px] bg-[#592EA9] rounded-[50px] absolute bottom-[-35px] left-[20%]',
      useSecondImage: true,
    },
  ];

  return (
    <div className="container mt-[88px] pt-[44px] sm:pt-[64px]">
      <AboutHero />
      {sections.map((section, index) => (
        <AboutSection key={index} {...section} />
      ))}
    </div>
  );
};

export default AboutPage;