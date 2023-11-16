//Components
import ProjectSlider from '../../components/ProjectSlider';

//Framer Motion
import { motion } from 'framer-motion';

//Variants
import { fadeIn } from '../../variants';


const Projects = () => {
  return (
    <div className='bg-primary h-full py-36 flex items-center'>
        <div className='container mx-auto'>
        <div className='flex flex-col items-center xl:flex-row gap-x-8'>
            {/*Text*/}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              
              <motion.h2 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-12'  
              >
                My Projects <span className='text-accent'>.</span>
              </motion.h2>

              <motion.p 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'
              >
                I like to code things from scratch and bring ideas to life, utilizing the latest web technologies.
              </motion.p>

            </div>
            
            {/*Slider*/}
            <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%] overflow-hidden'
            >
              <ProjectSlider />
            </motion.div>
          
          </div>
        </div>
    </div>
  );
};

export default Projects;
