
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">This is a Header</h1>
      <p>This is a paragraph</p>
      <Pricing></Pricing>
    </div>
  );
}
export default App;
