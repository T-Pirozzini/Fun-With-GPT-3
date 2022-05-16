import './App.css';

// components
import Nav from './components/Nav';
import Prompt from "./components/Prompt"
import Response from "./components/Response"

function App() {
  return (
    <div className="App">
      <Nav />
      <Prompt />
      <Response />
    </div>
  );
}

export default App;