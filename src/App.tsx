
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BrowseExperts } from './pages/BrowseExperts';
import { ExpertProfile } from './pages/ExpertProfile';
import { ForCompanies } from './pages/ForCompanies';
import { ForExperts } from './pages/ForExperts';
import { Pricing } from './pages/Pricing';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';



export default function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse-experts" element={<BrowseExperts />} />
            <Route path="/expert/:id" element={<ExpertProfile />} />
            <Route path="/for-companies" element={<ForCompanies />} />
            <Route path="/for-experts" element={<ForExperts />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}