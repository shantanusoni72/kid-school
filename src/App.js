import Home from './Components/Pages/Home/home';
import Alarm from './Components/Sections/Alarm/alarm';
import Header from './Components/Sections/Header/header';
import Footer from './Components/Sections/Footer/footer';
import * as Interface from './interface';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Alarm data={Interface.alarm} />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
