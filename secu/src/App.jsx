import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Hero from "./component/hero";
import Hero2 from './component/hero2';
import Hero3 from './component/hero3';
import Hero4 from './component/hero4';
import Hero5 from './component/hero5';
import Footer from './component/footer';
import Login from './pages/Login';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col">
      <main className="flex-grow">
        <Routes>
          
         
          <Route path="/" element={
            <>
              <Header/>
              <Hero/>
              <Hero2/>
              <Hero3/>
              <Hero4/>
              <Hero5/>
              <Footer />
            </>
          } />

        
          <Route path="/login" element={<Login />} />

        </Routes>
      </main>
    </div>
  );
}