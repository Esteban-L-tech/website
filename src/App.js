import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Banner from './compos/mynavbar';
import Footer from './compos/myfooter';
import News from './pages/news';
import Connexion from './pages/connexion'
import News1 from './pages/news-pages/news-1'
import Register from "./pages/register";
import Verifmail from "./pages/verfiMail";
import RecupMDP from "./pages/recupMDP";
import ChangementMDP from "./pages/changementMDP";



function App() {
  return (
    <>
      <Banner />
      <main className="container-fluid px-0">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Connexion />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verifmail" element={<Verifmail />} />
            <Route path="/news1" element={<News1 />} />
            <Route path="/recupmdp" element={<RecupMDP />} />
            <Route path="/changementmdp" element={<ChangementMDP />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>

    </>
  );
}

export default App;