import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import About from './pages/About';
import OurDogs from './pages/OurDogs';
import Litters from './pages/Litters';
import Boarding from './pages/Boarding';
import Photos from './pages/Photos';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import LeaveReview from './pages/LeaveReview';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-dogs" element={<OurDogs />} />
          <Route path="/litters" element={<Litters />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leavereview" element={<LeaveReview />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
