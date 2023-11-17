import React, { useState } from 'react';

//Fa Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";

//Si Icons
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiNpm,
  SiPostgresql,
  SiGit,
  SiHeroku,
  SiVercel,
  SiPostman,
  SiVisualstudiocode,
  SiMongodb,
  SiTableau,
} from "react-icons/si";


//Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages:',
        icons: [
          <FaJs />,
          <FaHtml5 />,
          <FaCss3 />,
          <SiTypescript />,
          <FaPython />,
        ],
      },
      
      {
        title: 'Frameworks & Libraries:',
        icons: [
          <SiNextdotjs />,
          <FaReact />,
          <SiRedux />,
          <SiNodedotjs />,
          <SiTailwindcss />,
          <SiNpm />,
          <FaBootstrap />,
        ],
      },

      {
        title: 'Other:',
        icons: [
          <SiPostgresql />,
          <SiGit />,
          <SiHeroku />,
          <SiVercel />,
          <SiPostman />,
          <SiVisualstudiocode />,
          <SiMongodb />,
          <FaAws />,
          <SiTableau />,

        ],
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      
      {
        title: 'Codecademy: Learn Typescript Course',
      },
      
      {
        title: 'Codecademy: Learn Advanced React Course',
      },
      
      {
        title: 'Codecademy: Learn React Course',
      },
      
      {
        title: 'Zero To Mastery Academy: The Complete Web Developer in 2023',
      },
      
      {
        title: 'UC Berkeley Extension: Data Analytics',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Zero To Mastery Academy - Full Stack Web Developer Course',
      },
      {
        title: 'UC Berkeley Extension - Data Analytics Boot Camp',
      },
      {
        title: 'University of California, Santa Cruz - BA, Environmental Studies & Economics',
      },
    ],
  },
];


//Framer Motion
import { motion } from 'framer-motion'

//Variants
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary py-32 text-center xl:text-left'>
      {/* <Circles /> */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        
        {/*Text*/}
        <div className='flex-1 flex flex-col justify-center'>
          
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 xl:mt-16 mt-2'
          >
            About Me<span className='text-accent'>.</span>
          </motion.h2>
            
            <motion.p 
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-4 xl:mb-12 px-2 xl:px-0 text-[12px] xl:text-[15px]'
            >
            Welcome to my portfolio! My name is Kobe Pho and I am a self-taught front end web developer with 2 years of experience and a background in Economics. Through my education and hands-on experience, I have developed a strong skill set in HTML, CSS, Javascript and React.
            </motion.p>
            
            <motion.p 
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-[12px] xl:text-[15px]'
            >
            Driven by creative challenges, I am dedicated to delivering user-friendly web designs through attention to detail, problem-solving, and innovative thinking. With a growth mindset, I continually seek opportunities to learn and stay updated on coding trends, bringing passion, skills, and dedication to every project. 
            
            </motion.p>
        </div>
        
        {/*Info*/}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[360px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 text-[14px]'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex} 
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 text-[13px]'>
                    
                    {/*Title*/}
                    <div className='font-light mb-2 md:mb-0 text-[13px]'>{item.title}</div>
                    <div className='hidden md:flex'></div>
                    <div className='flex gap-x-4'>
                      
                      {/*Icons*/}
                      {item.icons?.map((icon, itemIndex) => {
                        return <div className='text-2xl text-white'>{icon}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
