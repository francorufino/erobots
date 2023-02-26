import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { Layout } from './components/layout/Layout';
import { createContext } from 'react';

const CartContext = createContext([]);

function App() {
  return (
    <CartContext.Provider value={[]}>
      <Layout>
        <ItemListContainer />
      </Layout>
    </CartContext.Provider>
  );
}

export default App;
