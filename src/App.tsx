import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FormationPage from './pages/FormationPage';
import FormationsIAPage from './pages/FormationsIAPage';
import FormationsProfessionnellesPage from './pages/FormationsProfessionnellesPage';
import FormationsParticuliersPage from './pages/FormationsParticuliersPage';
import WebinairsPage from './pages/WebinairsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FormatPage from './pages/FormatPage';
import CGUPage from './pages/CGUPage';
import CGVPage from './pages/CGVPage';
import CookieBanner from './components/common/CookieBanner';
import CallbackModal from './components/common/CallbackModal';
import AccessibilityWidget from './components/common/AccessibilityWidget';
import FriendlyFeedbackTab from './components/common/FriendlyFeedbackTab';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="formations/:slug" element={<FormationPage />} />
          <Route path="formations-ia" element={<FormationsIAPage />} />
          <Route path="formations-professionnelles" element={<FormationsProfessionnellesPage />} />
          <Route path="formations-particuliers" element={<FormationsParticuliersPage />} />
          <Route path="format/:format" element={<FormatPage />} />
          <Route path="webinaires" element={<WebinairsPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/actualite-ia" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cgu" element={<CGUPage />} />
          <Route path="cgv" element={<CGVPage />} />
        </Route>
      </Routes>
      
      {/* 🔴 ÉLÉMENTS ESSENTIELS */}
      <CookieBanner />
      <CallbackModal />
      <AccessibilityWidget />
      <FriendlyFeedbackTab />
    </>
  );
}

export default App;