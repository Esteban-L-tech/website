import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import News from './pages/news';
import Connexion from './pages/connexion'
import Register from "./pages/register";
import Verifmail from "./pages/verfiMail";
import RecupMDP from "./pages/recupMDP";
import ChangementMDP from "./pages/changementMDP";
import Home from "./pages/home";
import Contact from "./pages/contactus";
import Informations from "./pages/informations";
import ScrollToTopArrow from "./compos/scrolltotop";



function App() {
  return (
    <>
      <BrowserRouter>
        <div id="main-container" className="d-flex flex-column min-vh-100">
          <header>
            <Banner />
          </header>
          <main className="flex-grow-1 container-fluid px-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/news" element={<News />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verifmail" element={<Verifmail />} />
              <Route path="/recupmdp" element={<RecupMDP />} />
              <Route path="/changementmdp" element={<ChangementMDP />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/informations" element={<Informations />} />
            </Routes>
            </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <ScrollToTopArrow/>
    </BrowserRouter>

    </>
  );
}

export default App;