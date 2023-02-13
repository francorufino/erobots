import './App.css';
import Navbar from './navbar/Navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about/About';
import ItemDetailContainer from './itemDetailContainer/ItemDetailContainer';
import CartPage from './cartPage/CartPage';
import NotFound from "./notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer />}
          />
            <Route
            exact
            path="/category/:id"
            element={<ItemListContainer />}
          />
            <Route
            exact
            path="/detail/:id"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/cart" 
            element={<CartPage/>}
          />
          <Route
            exact
            path="/*" 
            element={<NotFound />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
