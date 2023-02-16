import './App.css';
import TopHeader from './Component/TopHeader';
import BottomHeader from './Component/BottomHeader';
import Footer from './Component/Footer';
import Stats from './Component/Stats';
import Slide from './Component/Slide';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <BottomHeader/>
      <Slide/>
      <Stats/>
      <Footer />
     
    </div>
  );
}

export default App;
