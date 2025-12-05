import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import { lazy, Suspense, useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const Contact = lazy(() => import('@/pages/Contact'));

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderExiting, setPreloaderExiting] = useState(false);
  useEffect(() => {
    const enterMs = 2000;
    const exitMs = 700;
    const t1 = setTimeout(() => setPreloaderExiting(true), enterMs);
    const t2 = setTimeout(() => setPreloaderVisible(false), enterMs + exitMs);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <Router>
      {preloaderVisible && <Preloader exiting={preloaderExiting} />}
      <Suspense fallback={<Preloader /> }>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
