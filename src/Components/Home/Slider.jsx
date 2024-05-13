import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slider = () => {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div className="opacity-50">
                            <img className="h-screen w-full object-cover overflow-hidden" src="/E-commerceWebsiteRefresh.png" />
                        </div>
                        <div className="bg-black text-white p-6 rounded-2xl absolute top-52 right-4 md:right-52 -translate-y-1/2">
                            <h1 className="text-2xl md:text-3xl uppercase font-semibold mb-3 ">E-commerce Website</h1>
                            <p className="w-72 md:w-96">Enhanced the user experience of an e-commerce site by optimizing product pages and checkout process.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div className="opacity-50">
                            <img className="h-screen w-full object-cover overflow-hidden" src="/PortfolioWebsiteCreation.jpeg" />
                        </div>
                        <div className="bg-white text-black p-6 rounded-2xl absolute top-52 right-4 md:right-52 -translate-y-1/2">
                            <h1 className="text-2xl md:text-3xl uppercase font-semibold mb-3">Portfolio Website Creation</h1>
                            <p className="w-72 md:w-96">Developed a professional portfolio website showcasing skills, projects, and contact information.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div className="opacity-50">
                            <img className="h-screen w-full object-cover overflow-hidden" src="/TravelBlogRedesign.jpg" />
                        </div>
                        <div className="bg-white text-green-600 p-6 rounded-2xl absolute top-52 right-4 md:right-52 -translate-y-1/2">
                            <h1 className="text-2xl md:text-3xl uppercase font-semibold mb-3">Travel Blog Redesign</h1>
                            <p className="w-72 md:w-96">Revamped a travel blog with modern UI/UX, improved navigation, and responsive design.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div className="opacity-50">
                            <img className="h-screen w-full object-cover overflow-hidden" src="/BlogWebsite.png" />
                        </div>
                        <div className="bg-black text-white p-6 rounded-2xl absolute top-52 right-4 md:right-52 -translate-y-1/2">
                            <h1 className="text-2xl md:text-3xl uppercase font-semibold mb-3">Blog Website</h1>
                            <p className="w-72 md:w-96">Created a dynamic blog website with user-friendly features, such as category-based navigation, comment sections, and author profiles.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
