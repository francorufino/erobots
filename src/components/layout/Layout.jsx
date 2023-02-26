import Navbarr from '../navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <main className="genSetting">
      <Navbarr />
      {children}
      <footer>
        <h2>e-robots made with love</h2>
      </footer>
    </main>
  );
};
