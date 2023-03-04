import Navbarr from '../navbar/Navbar';
import Footer from '../footer/Footer';

export const Layout = ({ children }) => {
  return (
    <main>
      <Navbarr />
      {children}
      <Footer />
    </main>
  );
};
