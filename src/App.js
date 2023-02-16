import './App.css';
import TopHeader from './Component/TopHeader';
import BottomHeader from './Component/BottomHeader';
import Footer from './Component/Footer';
import Stats from './Component/Stats';
import Slide from './Component/Slide';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <BottomHeader/>
      <Slide/>
      <Stats/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
