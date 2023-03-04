import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../views/notFound/NotFound';
import Category from '../views/category';
import Item from '../views/item';
import About from '../views/about/About';
import Contact from '../views/contact/Contact';
import CartPage from '../views/cartPage/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/*', element: <NotFound /> },
  { path: '/category/:category', element: <Category /> },
  { path: '/item/:id', element: <Item /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CartPage /> },
  { path: '/continueshopping', element: <App /> },
]);
