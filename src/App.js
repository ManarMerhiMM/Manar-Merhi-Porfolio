import NavBar from './Components/Primary/Navbar';
import Hero from './Components/Primary/Hero';
import Footer from './Components/Primary/Footer'

import Education from './Components/Sections/Education';
import Experiences from './Components/Sections/Experiences';
import Projects from './Components/Sections/Projects';
import Certifications from './Components/Sections/Certifications';

import { ThemeProvider } from './Contexts/ThemeContext';

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

polyfillCountryFlagEmojis();

const navLinks = [
  { name: "Overview", path: "#Overview"},
  { name: "Experiences", path: "#Experiences" },
  { name: "Projects", path: "#Projects" },
  { name: "Certifications", path: "#Certifications" },
  { name: "Education", path: "#Education"}
];

function App() {
  return (
    <ThemeProvider>
      <NavBar links={navLinks} />
      <Hero />
      <Experiences />
      <Projects />
      <Certifications />
      <Education />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
