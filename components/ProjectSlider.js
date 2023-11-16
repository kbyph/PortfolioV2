//Data
export const projectSlides = {
  slides: [
    {
      images: [
        {
          title: 'Drivefy',
          path: '/drivefy.jpg',
          link: 'https://drivefy.vercel.app/'
        },
        {
          title: 'Smart Brain',
          path: '/smartbrain.png',
          link: 'https://smart-brain-react.herokuapp.com/'
        },
        {
          title: 'Vibetopia',
          path: '/vibetopia.png',
          link: 'https://kbyph.github.io/Vibetopia/'
        },
        {
          title: 'Robofriends',
          path: '/robofriends.png',
          link: 'https://kbyph.github.io/Robofriends/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/comingsoon.jpg',
        },
        {
          title: 'title',
          path: '/comingsoon.jpg',
        },
        {
          title: 'title',
          path: '/comingsoon.jpg',
        },
        {
          title: 'title',
          path: '/comingsoon.jpg',
        },
      ],
    },
  ],
};

//Import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//Import Required Modules
import { Pagination } from 'swiper';

//Icons 
import { BsArrowRight } from 'react-icons/bs';

//Next Image
import Image from 'next/image';

const ProjectSlider = () => {
  return ( 
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {projectSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/*Image*/}
                    <Image 
                      src={image.path} 
                      width={500} 
                      height={300} 
                      alt=''
                      className='overflow-hidden' />
                      
                    {/*Overlay Gradient*/}
                    <a  href={image.link} target="_blank">
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#49BDA6] to-[#006551] opacity-0 group-hover:opacity-60 transition-all duration-700'>
                    </div>
                    </a>
                    {/*Title*/}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <a className='flex items-center' href={image.link} target="_blank">
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/*Title Part 1*/}
                        <div className='delay-100'>LIVE</div>
                        {/*Title Part 2*/}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                        {/*Icon*/}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                          <BsArrowRight />
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
                );
              })}
              </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


export default ProjectSlider;
