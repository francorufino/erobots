import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { Layout } from './components/layout/Layout';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Layout>
        <ItemListContainer />
      </Layout>
    </CartContextProvider>
  );
}

export default App;
