import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import Preloader from "@/components/features/Preloader";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-6">🔭</div>
      <h1 className="text-white font-display font-700 text-4xl mb-3">404</h1>
      <p className="text-slate-400 text-lg mb-6">Page not found</p>
      <a href="/" className="btn-primary">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Portfolio
      </a>
    </div>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <Preloader />
      <div
        style={{
          opacity: preloaderDone ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
