import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as AiOutlineUserAdd } from '../../images/edit-2.svg';
import houseImage from '../../images/houseImage.png';
import houseImage2 from '../../images/houseImage2.png';
import consultingImage from '../../images/marketing.png';
import { ReactComponent as AiOutlineMessage } from '../../images/messages.svg';
import projectImage1 from '../../images/slider-1.jpeg';
import projectImage2 from '../../images/slider-2.jpeg';
import projectImage3 from '../../images/slider-3.jpeg';
import projectImage4 from '../../images/slider-4.jpeg';
import projectImage5 from '../../images/slider-5.jpeg';
import { ReactComponent as AiOutlineTag } from '../../images/sms-tracking.svg';
import { ReactComponent as StarDisabled } from '../../images/star-disable.svg';
import { ReactComponent as Star } from '../../images/star.svg';

const AppMain = () => {
    const projects = [
        { name: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum.', image: projectImage1, rating: '4.83' },
        { name: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum.', image: projectImage2, rating: '4.83' },
        { name: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum.', image: projectImage3, rating: '4.83' },
        { name: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum.', image: projectImage4, rating: '4.83' },
        { name: 'Sobha Heartland II Villas', description: 'Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum.', image: projectImage5, rating: '4.83' }
    ];

    return (
        <main>
            <section className="container max-h-[450px] mx-auto px-6 py-8 flex justify-between rounded-xl items-center background-image mt-8 max-sm:flex max-sm:flex-col-reverse max-sm:max-h-full max-sm:px-3 max-sm:py-4">
                <div className="flex-1">
                    <p className="text-gray-700 mb-[15px] w-full max-w-[435px] text-sm">
                        Welcome to Realstate
                    </p>
                    <h2 className="font-bold mb-2 text-[28px] md:text-[50px]">Manage Your Property</h2>
                    <p className="text-gray-700 mt-6 mb-6 w-full max-w-[435px] text-base">
                        Your will have everything nearby supermarket, buses, station, the carmen neighborhood, etc
                    </p>

                    <div className="flex max-sm:flex max-sm:flex-col max-sm:gap-2">
                        <input
                            type="email"
                            className="appearance-none w-full max-w-[438px] block bg-white text-gray-700 border border-gray-200 rounded-full px-6 py-[18px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-base"
                            placeholder="Enter your email"
                        />
                        <button
                            className="text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full px-6 py-[18px] ml-4 text-base ml-[-50px] max-sm:ml-0"
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={houseImage} alt="Modern House" />
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-[45px]">
                        <h2 className="text-sm">
                            Three steps. Three minutes.
                        </h2>
                        <h1 className="mt-4 text[50px] leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                            Everything should be this easy.
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
                        <div className="text-left max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
                            <AiOutlineMessage className="h-12 w-12 text-green-500 mb-[22px]" />
                            <h3 className="mt-2 leading-6 font-medium text-gray-900 mb-[22px] text-[28px]">Answer questions</h3>
                            <p className="text-sm leading-6 text-black">
                                Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum in in vestibulum.
                            </p>
                        </div>
                        <div className="text-left max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
                            <AiOutlineTag className="h-12 w-12 text-orange-500 mb-[22px]" />
                            <h3 className="mt-2 text-[28px] leading-6 font-medium text-gray-900 mb-[22px]">Select a quote</h3>
                            <p className="text-sm leading-6 text-black">
                                Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum in in vestibulum.
                            </p>
                        </div>
                        <div className="text-left max-sm:text-center max-sm:flex max-sm:flex-col max-sm:items-center">
                            <AiOutlineUserAdd className="h-12 w-12 text-blue-500 mb-[22px]" />
                            <h3 className="mt-2 text-[28px] leading-6 font-medium text-gray-900 mb-[22px]">Get registered</h3>
                            <p className="text-sm leading-6 text-black">
                                Lorem ipsum dolor sit amet consectetuer. Adipiscing imperdiet bibendum in in vestibulum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white max-sm:hidden">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left pb-12">
                        <h2 className="text-base font-light">Best Project of the Years</h2>
                        <h1 className="mt-4 text-[28px] md:text-[50px] leading-8 font-semibold tracking-tight text-gray-900 sm:">
                            Our recent projects
                        </h1>
                    </div>
                    <div className="flex space-x-4">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper max-sm:flex max-sm:flex-col"
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide>
                                    <div className="w-full bg-[#FEFEFF] rounded-lg border border-[#BEBEBE]">
                                        <img className="w-full h-64 object-cover rounded-lg mb-4" src={project.image} alt={project.name} />
                                        <div className='p-4'>
                                            <h3 className="text-lg font-semibold">{project.name}</h3>
                                            <p className="text-gray-600">{project.description}</p>
                                            <div className="flex items-center mt-4">
                                                <div className="flex text-yellow-400">
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <StarDisabled />
                                                </div>
                                                <span className="ml-2 text-gray-600">{project.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className='m-auto max-w-[785px] text-center mb-[45px]'>
                    <h2 className="text-[28px] md:text-[50px] font-semibold">We are a global, boutique real estate brokerage</h2>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">

                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="text-[28px] md:text-[38px] font-semibold mb-6">The transfer of real estate</h2>
                        <p className="text-black text-base max-w-[474px]">
                            Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
                        </p>

                        <div className="flex mb-[80px] mt-[45px] max-sm:flex max-sm:flex-col max-sm:gap-2">
                            <button className="bg-black text-white rounded-full py-[15px] px-[35px] mr-4 hover:bg-gray-900 max-sm:w-full">Book Now!</button>

                            <button className="bg-transparent text-black rounded-full py-[15px] px-[35px] border border-[#BEBEBE] hover:bg-gray-200">Read More</button>
                        </div>

                        <div className="flex gap-12 max-sm:hidden">
                            <div className="mr-10">
                                <span className="font-bold text-[28px] md:text-[50px]">12+</span>
                                <p>Customers</p>
                            </div>
                            <div className="mr-10">
                                <span className="font-bold text-[28px] md:text-[50px]">14+</span>
                                <p>Offices</p>
                            </div>
                            <div>
                                <span className="font-bold text-[28px] md:text-[50px]">10+</span>
                                <p>Students</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-end">
                        <img src={consultingImage} alt="Consultation" className="rounded-2xl shadow-lg" />
                    </div>
                </div>
            </section>
            {/* max-h-[450px] */}
            <section className="container max-h-[450px] mx-auto px-6 py-8 flex justify-between rounded-xl items-center background-image mt-8 max-sm:flex max-sm:flex-col-reverse max-sm:max-h-full">
                <div className="flex-1">
                    <h2 className="text-[28px] md:text-[50px] font-bold mb-2">Subscribe Our Newsletter</h2>
                    <p className="text-gray-700 mt-6 mb-6 w-full max-w-[435px] text-base">
                        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
                    </p>
                    <div className="flex max-sm:flex max-sm:flex-col max-sm:gap-2">
                        <input
                            type="email"
                            className="appearance-none w-full max-w-[438px] block bg-white text-gray-700 border border-gray-200 rounded-full px-6 py-[18px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-base"
                            placeholder="Enter your email"
                        />
                        <button
                            className="text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full px-6 py-[18px] ml-4 text-base ml-[-50px] max-sm:ml-0"
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={houseImage2} alt="Modern House" />
                </div>
            </section>
        </main>
    );
}

export default AppMain;
