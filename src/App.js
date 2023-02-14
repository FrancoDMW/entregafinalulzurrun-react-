import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div>
          <ItemListContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
