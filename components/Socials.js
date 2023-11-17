//Links
import Link from 'next/link';

//Icons
import {FaGithub, FaLinkedin, FaFileContract } from 'react-icons/fa';


const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    
    <Link href={"https://github.com/kbyph"} target="_blank" className='hover:text-accent transition-all duration-300'>
      <FaGithub />
    </Link>
  
    <Link href={"https://www.linkedin.com/in/kobepho/"} target="_blank" className='hover:text-accent transition-all duration-300'>
      <FaLinkedin />
    </Link>

    <Link href={"/KobePhoResume.pdf"} target="_blank" className='hover:text-accent transition-all duration-300'>
      <FaFileContract />
    </Link>

  </div>
  );
};

export default Socials;
