import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Works />
          <Skills />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
