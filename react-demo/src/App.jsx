import "./App.css";
import Navbar from "./components/Navbar";
import Hero from"./components/Hero";
import EventSection from "./components/EventSection";
function App(){
  return(
    <div>
      <Navbar />
      <main id="home">    
      <Hero />
      <EventSection />
      </main>  
    </div>
  );
}
export default App;