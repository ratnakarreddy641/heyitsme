import "./App.css";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Tags from "./Components/Tags";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grad from "./Components/Grad";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <>
                <Intro />
                <Tags />
                <Experience />
              </>
            }
          />
          <Route path="Grad" element={<Grad/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
