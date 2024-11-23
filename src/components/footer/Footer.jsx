import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='py-12 mt-[90px] bg-[#232536]'>
			<div className='container'>
				<div className='md:flex justify-between'>
					<div>
						<p className='opacity-50 text-inter font-normal leading-7 text-base text-white'>
							Finstreet 118 2561 Fintown
						</p>
						<p className='opacity-50 text-inter font-normal leading-7 text-base text-white'>
							Hello@finsweet.com 020 7993 2905
						</p>
					</div>
					<div className='mt-5 flex gap-6 md:mt-0'>
						<FaFacebook className='text-[#6D6E76] hover:text-white cursor-pointer transition-colors duration-300' size={26}
						/>
						<FaTwitter className='text-[#6D6E76] hover:text-white cursor-pointer transition-colors duration-300' size={26}
						/>
						<FaInstagram className='text-[#6D6E76] hover:text-white cursor-pointer transition-colors duration-300' size={26}
						/>
						<FaLinkedin className='text-[#6D6E76] hover:text-white cursor-pointer transition-colors duration-300' size={26}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;