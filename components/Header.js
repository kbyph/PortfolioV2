//Next Image
import Image from 'next/image';

//Next Link
import Link from 'next/link';

//Components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:-h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/*Logo*/}
          <Link href={'/'}>
            <Image 
              src={'/name-logo.png'} 
              width={100} 
              height={30} 
              alt='' 
              priority={true}
            />
          </Link>
          {/*Socials*/}
          <Socials />
        </div>
      </div>
    </header>  
  )
};

export default Header;
