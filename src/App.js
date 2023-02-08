
import './App.css';
import { NavBar } from './components/NavBar';
import { SocialNav } from './components/SocialNav';
import { Banner } from './components/Banner';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavBar />
      <SocialNav />
      <Banner />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
