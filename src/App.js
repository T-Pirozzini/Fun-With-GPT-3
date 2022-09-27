import './App.css';

// components
import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">      
      <Header />
      <Home />
      <p className="expired">Sorry - Usage has exceeded the trial period.</p>           
      <Footer /> 
    </div>
  );
}

export default App;