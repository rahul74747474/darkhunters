import "./global.css";

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import Index from "./pages/Index";
import About from "./pages/About";
import Squad from "./pages/Squad";
import PlayerProfile from "./pages/PlayerProfile";
import Matches from "./pages/Matches";
import Tournament from "./pages/Tournament";
import Merchandise from "./pages/Merchandise";
import Joinee from "./pages/Joinee";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { ScrollProvider } from "./context/scrollContext";

const queryClient = new QueryClient();

const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);
  //() => { return !localStorage.getItem("darkhunters_splash_shown");}

  useEffect(() => {
    if (showSplash) {
      localStorage.setItem("darkhunters_splash_shown", "true");
    }
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} duration={3000} />}
      <Header />
      <main className=" min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/player/:jerseyNumber" element={<PlayerProfile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/joinee" element={<Joinee />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ScrollProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </TooltipProvider>
    </ScrollProvider>
  </QueryClientProvider>
);


createRoot(document.getElementById("root")!).render(<App />);
