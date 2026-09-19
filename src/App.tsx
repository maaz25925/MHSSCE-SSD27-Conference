import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ImportantDates from './components/ImportantDates';
import Committee from './components/comittee';
import Registration from './components/Registration';
import Mumbai from './components/Mumbai';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ImportantDates />
      <Committee />
      <Registration />
      <Mumbai />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
