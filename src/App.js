
import './App.css';
import { NavBar } from './components/NavBar';
import { SocialNav } from './components/SocialNav';
import { Banner } from './components/Banner';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialNav />
      <Banner />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;
