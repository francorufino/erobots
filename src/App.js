import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { Layout } from './components/layout/Layout';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Layout>
        <ItemListContainer />
      </Layout>
    </UserContextProvider>
  );
}

export default App;
