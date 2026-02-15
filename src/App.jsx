import gsap from 'gsap';
import {ScrollTrigger} from "gsap/all";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className='wrapper'>
      <main>
          <Header/>
          <Hero/>
      </main>
    </div>
  )
}

export default App
