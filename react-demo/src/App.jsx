import "./App.css";
import Navbar from "./components/Navbar";
import Hero from"./components/Hero";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
function App(){
  return(
    <div>
      <Navbar />
      <main id="home">    
      <Hero />
      <EventSection />
      </main>  
      <Footer />
    </div>
  );
}
export default App;