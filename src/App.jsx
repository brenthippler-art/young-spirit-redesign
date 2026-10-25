import { Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import OurDogs from "./pages/OurDogs";
import Litters from "./pages/Litters";
import Boarding from "./pages/Boarding";
import Photos from "./pages/Photos";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import LeaveReview from "./pages/LeaveReview";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
