//Header
import Head from 'next/head'

//Fonts
import {Sora} from '@next/font/google'

//Font Settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//Components
import Nav from '../components/Nav'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
  <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <Head>
      <title>Kobe Pho | Frontend Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <Nav />
    <Header />
    {children}
  </div>
  );
};

export default Layout;
