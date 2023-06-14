import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
  children: any | React.Component;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
