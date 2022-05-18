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
      <Footer />            
    </div>
  );
}

export default App;