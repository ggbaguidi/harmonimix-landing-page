import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Make sure Switch is imported
import Footer from './components/Footer';
import Download from './components/Download';
import Experience from './components/Experience';
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <Router>
      <div className="App text-white overflow-hidden">
        <Header />
        <Switch>
          <Route path="/about">
            <AboutSection />
          </Route>
          <Route path="/">
            <Hero />
            <Experience />
            <FeaturesSection />
            <Search />
            <VideoSection/>
            <Download />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
