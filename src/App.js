import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Experiences from './Pages/Experiences';
import Certifications from './Pages/Certifications';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

polyfillCountryFlagEmojis();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
