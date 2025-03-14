import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import News from './pages/news';
import Connexion from './pages/connexion'
import News1 from './pages/news-pages/news-1'
import Register from "./pages/register";
import Verifmail from "./pages/verfiMail";



function App() {
  return (
    <>
      <Banner />
      <main className="container-fluid px-0">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Verifmail />} />
            <Route path="/Connexion" element={<Connexion />} />
          </Routes>
        </BrowserRouter>

      </main>
      <Footer />
    </>
  );
}

export default App;