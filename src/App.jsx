import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/a-navbar";
import { Banner } from "./components/b-banner";
import { Skills } from "./components/c-skills";
import { Projects } from "./components/d-projects";
import { Contact } from "./components/e-contact";
import { Footer } from "./components/f-footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
