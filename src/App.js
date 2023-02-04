import './App.css';
import Navbar from './navbar/Navbar';
import ItemListContainer from './itemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />

      <ItemListContainer greeting={'Hello world of Robots!'} />
    </div>
  );
}

export default App;
