import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../views/notFound/NotFound';
import Category from '../views/category';
import Item from '../views/item';
import About from '../views/about/About';
import Contact from '../views/contact/Contact';
import CartListContainer from '../components/cartListContainer/CartListContainer';
import Create from '../components/create/Create';
import Faq from '../components/../views/faq/faq';
import Loading from '../views/loading/Loading';
import { Layout } from '../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
  { path: '/category/:category', element: <Category /> },
  { path: '/item/:id', element: <Item /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/cart', element: <CartListContainer /> },
  { path: '/checkout', element: <CartListContainer /> },
  { path: '/create', element: <Create /> },
  { path: '/continueshopping', element: <App /> },
  { path: '/faq', element: <Faq /> },
  { path: '/loading', element: <Loading /> },
]);
