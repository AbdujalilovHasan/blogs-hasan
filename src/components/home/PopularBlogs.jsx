import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useData from '../../hooks/useData';
import PopularItem from './PopularItem';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const PopularBlogs = () => {
	const { data } = useData('post/lastones');

	return (
		<div className="container sm:mt-[70px]mb-0 md:mt-[94px]mb-0">
			<h1 className="text-2xl mt-[60px] font-bold mb-7">Popular Blogs</h1>
			<Swiper
				breakpoints={{
					768: { slidesPerView: 3 },
				}}
				spaceBetween={30}
				freeMode={true}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
				className="mySwiper screen_bnt:h-[700px] custom:h-[650px] flex justify-between"
			>
				{data?.map((item, index) => (
					<SwiperSlide key={index}>
						<PopularItem {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<hr className='mt-10' />
		</div>
	);
};

export default PopularBlogs;