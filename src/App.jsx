import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import {Skill} from "./components/Skill/Skill"
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Particlebackground} from "./components/Particles/Particlebackground";

function App() {
  return (
    <div className={styles.App}>
      <Particlebackground/>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
