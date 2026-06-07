/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import SignIn from "./pages/SignIn";
import ArtworkDetail from "./pages/ArtworkDetail";
import Manifesto from "./pages/Manifesto";
import Services from "./pages/Services";
import Subscriptions from "./pages/Subscriptions";
import Inquiry from "./pages/Inquiry";
import Collections from "./pages/Collections";
import AmbientAudio from "./components/AmbientAudio";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AmbientAudio />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/inquire" element={<Inquiry />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
    </>
  );
}

