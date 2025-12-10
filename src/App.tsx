import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FormationPage from './pages/FormationPage';
import FormationsIAPage from './pages/FormationsIAPage';
import FormationsProfessionnellesPage from './pages/FormationsProfessionnellesPage';
import FormationsParticuliersPage from './pages/FormationsParticuliersPage';
import FormationsSecuritePage from './pages/FormationsSecuritePage';
import WebinairsPage from './pages/WebinairsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import FormatPage from './pages/FormatPage';
import CGUPage from './pages/CGUPage';
import CGVPage from './pages/CGVPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import FormationIATPEPMEPage from './pages/FormationIATPEPMEPage';
import FormationChatGPTEntreprisePage from './pages/FormationChatGPTEntreprisePage';
import FormationIAMarketingPage from './pages/FormationIAMarketingPage';
import FormationIARHPage from './pages/FormationIARHPage';
import FormationIACommerciauxPage from './pages/FormationIACommerciauxPage';
import FormationIAMetiersBouchePage from './pages/FormationIAMetiersBouchePage';
import HabilitationElectriquePage from './pages/HabilitationElectriquePage';
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
          <Route path="formations-securite" element={<FormationsSecuritePage />} />
          <Route path="formation-ia-tpe-pme" element={<FormationIATPEPMEPage />} />
          <Route path="formation-chatgpt-entreprise" element={<FormationChatGPTEntreprisePage />} />
          <Route path="formation-ia-marketing" element={<FormationIAMarketingPage />} />
          <Route path="formation-ia-rh" element={<FormationIARHPage />} />
          <Route path="formation-ia-commerciaux" element={<FormationIACommerciauxPage />} />
          <Route path="formation-ia-metiers-bouche" element={<FormationIAMetiersBouchePage />} />
          <Route path="habilitation-electrique-vehicules-electriques" element={<HabilitationElectriquePage />} />
          <Route path="format/:format" element={<FormatPage />} />
          <Route path="webinaires" element={<WebinairsPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/actualite-ia" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cgu" element={<CGUPage />} />
          <Route path="cgv" element={<CGVPage />} />
          <Route path="mentions-legales" element={<MentionsLegalesPage />} />
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