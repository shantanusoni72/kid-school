import Home from './Components/Pages/Home/home';
import Alarm from './Components/Sections/Alarm/alarm';
import Header from './Components/Sections/Header/header';
import Footer from './Components/Sections/Footer/footer';
import home_page_content from './home_page.json';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Alarm data={home_page_content.home_page.alarm_section} />
      <Header />
      {/* <Home home_page_content={home_page_content} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
