import './App.css';
import Footer from './components/Footer';
import Download from './components/Download';
import Experience from './components/Experience';
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search';
import FeaturesSection from './components/FeaturesSection';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Hero/>
      <Experience/>
      <FeaturesSection/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
