//Next Image
import Image from 'next/image';

//Components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

//Framer Motion
import {motion} from 'framer-motion';

//Type Animation
import {TypeAnimation} from 'react-type-animation';

//Variants
import { fadeIn } from '../variants';

const Home = () => {
  return <div className='bg-primary/30 h-full '>
    {/*Text*/}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/*Title*/}
        <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className='h1'
        >
          Kobe Pho <br /> 
          <span className='mr-4 text-[36px]'>I am a</span>
              <TypeAnimation sequence={[
                'Developer.',
                2000,
                'Designer.',
                2000,
                'Visualizer.',
                2000,
              ]}
              speed={50}
              className='text-accent text-[36px]'
              wrapper='span'
              repeat={Infinity}
              />
        </motion.h1>
        {/*Subtitle*/}
        <motion.p 
          variants={fadeIn('down', 0.3)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12'
        >
            Front-End Web Developer that is passionate about crafting immersive and user-friendly web experiences.
        </motion.p>
        {/*Button*/}
        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/*Image*/}
    <div className='w-full h-full xl:bg-cover absolute right-0 bottom-0'>
      {/*BG Image*/}
      <div className="bg-none xl:bg-foodog xl:bg-cover xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        {/*Particles*/}
        <ParticlesContainer />
      </div>
    </div>
  </div>;
};

export default Home;
