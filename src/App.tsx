import React, { useState } from 'react';
import { LIBRA_CONFIG } from './data/config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SegmentCards } from './components/SegmentCards';
import { ServicesGrid } from './components/ServicesGrid';
import { CoverageSection } from './components/CoverageSection';
import { TrustSection } from './components/TrustSection';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { MobileFixedBar } from './components/MobileFixedBar';
import { EmbedExportModal } from './components/EmbedExportModal';
import { ControlToolbar } from './components/ControlToolbar';

export default function App() {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [phoneFormatted, setPhoneFormatted] = useState(LIBRA_CONFIG.phoneFormatted);
  const [whatsappNumber, setWhatsappNumber] = useState(LIBRA_CONFIG.phoneRaw);
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);
  const [trackedEvents, setTrackedEvents] = useState<Array<{
    type: 'whatsapp' | 'phone';
    source: string;
    timestamp: string;
  }>>([]);

  const cleanPhoneDigits = whatsappNumber.replace(/\D/g, '');
  const phoneTelLink = `tel:+${phoneFormatted.replace(/\D/g, '')}`;
  const whatsappBaseUrl = `https://wa.me/${cleanPhoneDigits}`;

  // Centralized click tracker (conforming strictly to no false 'completed service' claims)
  const handleTrack = (type: 'whatsapp' | 'phone', source: string) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    const newEvent = { type, source, timestamp };

    setTrackedEvents(prev => [newEvent, ...prev]);

    // DataLayer / Google Tag Manager
    if (typeof window !== 'undefined') {
      const gWindow = window as any;
      if (gWindow.dataLayer && Array.isArray(gWindow.dataLayer)) {
        gWindow.dataLayer.push({
          event: 'contact_interaction',
          contact_type: type,
          source_element: source,
          company: LIBRA_CONFIG.companyName,
          timestamp: new Date().toISOString(),
        });
      }
      if (typeof gWindow.gtag === 'function') {
        gWindow.gtag('event', type === 'whatsapp' ? 'click_whatsapp' : 'click_phone', {
          event_category: 'Contact',
          event_label: source,
          value: 1,
        });
      }
    }

    console.info(`[Libra Tracking] Intenção de contato registrada: Tipo=${type}, Origem=${source}. (Aviso: O clique representa intenção de contato e não atendimento concluído).`);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-800 flex flex-col font-sans">
      
      {/* Top Toolbar for Testing, Google Sites Code Export & Mobile Simulation */}
      <ControlToolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenEmbedModal={() => setIsEmbedModalOpen(true)}
        phoneFormatted={phoneFormatted}
        setPhoneFormatted={setPhoneFormatted}
        whatsappNumber={whatsappNumber}
        setWhatsappNumber={setWhatsappNumber}
        trackedEventsCount={trackedEvents.length}
      />

      {/* Main View Container (Desktop vs Smartphone Simulator Frame) */}
      {viewMode === 'mobile' ? (
        <div className="flex-1 bg-slate-900 py-8 px-4 flex items-center justify-center overflow-x-hidden">
          {/* Smartphone device mock frame */}
          <div className="w-[375px] max-w-full bg-[#F5F7FA] rounded-[38px] border-[10px] border-slate-800 shadow-2xl overflow-hidden relative flex flex-col h-[780px]">
            
            {/* Phone speaker notch */}
            <div className="bg-slate-800 h-6 w-36 mx-auto rounded-b-xl flex items-center justify-center shrink-0 z-50">
              <div className="w-10 h-1 bg-slate-600 rounded-full"></div>
            </div>

            {/* Scrollable screen content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
              <Header
                onTrack={handleTrack}
                phoneFormatted={phoneFormatted}
                whatsappUrl={whatsappBaseUrl}
              />
              
              <Hero
                onTrack={handleTrack}
                phoneFormatted={phoneFormatted}
                phoneTelLink={phoneTelLink}
                whatsappUrl={whatsappBaseUrl}
                baseLocation={LIBRA_CONFIG.baseLocation}
                title={LIBRA_CONFIG.heroTitle}
                subtitle={LIBRA_CONFIG.heroSubtitle}
                disclaimer={LIBRA_CONFIG.heroDisclaimer}
              />

              <SegmentCards
                segmentations={LIBRA_CONFIG.segmentations}
                whatsappBaseUrl={whatsappBaseUrl}
                onTrack={handleTrack}
              />

              <ServicesGrid
                services={LIBRA_CONFIG.services}
                whatsappBaseUrl={whatsappBaseUrl}
                onTrack={handleTrack}
              />

              <CoverageSection
                coverage={LIBRA_CONFIG.coverage}
                whatsappBaseUrl={whatsappBaseUrl}
                onTrack={handleTrack}
              />

              <TrustSection
                pillars={LIBRA_CONFIG.trustPillars}
                phoneFormatted={phoneFormatted}
                baseAddress={LIBRA_CONFIG.baseAddress}
              />

              <HowItWorks
                steps={LIBRA_CONFIG.steps}
                whatsappBaseUrl={whatsappBaseUrl}
                phoneTelLink={phoneTelLink}
                phoneFormatted={phoneFormatted}
                onTrack={handleTrack}
              />

              <Footer
                companyName={LIBRA_CONFIG.companyName}
                phoneFormatted={phoneFormatted}
                phoneTelLink={phoneTelLink}
                whatsappBaseUrl={whatsappBaseUrl}
                baseAddress={LIBRA_CONFIG.baseAddress}
                legalDisclaimer={LIBRA_CONFIG.legalDisclaimer}
                onTrack={handleTrack}
              />

              {/* Mobile Fixed Bar in smartphone frame */}
              <MobileFixedBar
                whatsappBaseUrl={whatsappBaseUrl}
                phoneTelLink={phoneTelLink}
                phoneFormatted={phoneFormatted}
                onTrack={handleTrack}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Full Desktop / Standard Responsive View */
        <main className="flex-1 flex flex-col">
          <Header
            onTrack={handleTrack}
            phoneFormatted={phoneFormatted}
            whatsappUrl={whatsappBaseUrl}
          />
          
          <Hero
            onTrack={handleTrack}
            phoneFormatted={phoneFormatted}
            phoneTelLink={phoneTelLink}
            whatsappUrl={whatsappBaseUrl}
            baseLocation={LIBRA_CONFIG.baseLocation}
            title={LIBRA_CONFIG.heroTitle}
            subtitle={LIBRA_CONFIG.heroSubtitle}
            disclaimer={LIBRA_CONFIG.heroDisclaimer}
          />

          <SegmentCards
            segmentations={LIBRA_CONFIG.segmentations}
            whatsappBaseUrl={whatsappBaseUrl}
            onTrack={handleTrack}
          />

          <ServicesGrid
            services={LIBRA_CONFIG.services}
            whatsappBaseUrl={whatsappBaseUrl}
            onTrack={handleTrack}
          />

          <CoverageSection
            coverage={LIBRA_CONFIG.coverage}
            whatsappBaseUrl={whatsappBaseUrl}
            onTrack={handleTrack}
          />

          <TrustSection
            pillars={LIBRA_CONFIG.trustPillars}
            phoneFormatted={phoneFormatted}
            baseAddress={LIBRA_CONFIG.baseAddress}
          />

          <HowItWorks
            steps={LIBRA_CONFIG.steps}
            whatsappBaseUrl={whatsappBaseUrl}
            phoneTelLink={phoneTelLink}
            phoneFormatted={phoneFormatted}
            onTrack={handleTrack}
          />

          <Footer
            companyName={LIBRA_CONFIG.companyName}
            phoneFormatted={phoneFormatted}
            phoneTelLink={phoneTelLink}
            whatsappBaseUrl={whatsappBaseUrl}
            baseAddress={LIBRA_CONFIG.baseAddress}
            legalDisclaimer={LIBRA_CONFIG.legalDisclaimer}
            onTrack={handleTrack}
          />

          {/* Mobile Fixed Bar for native responsive mobile screens */}
          <MobileFixedBar
            whatsappBaseUrl={whatsappBaseUrl}
            phoneTelLink={phoneTelLink}
            phoneFormatted={phoneFormatted}
            onTrack={handleTrack}
          />
        </main>
      )}

      {/* Modal with Google Sites Embed Code & Test Checklist */}
      <EmbedExportModal
        isOpen={isEmbedModalOpen}
        onClose={() => setIsEmbedModalOpen(false)}
        trackedEvents={trackedEvents}
        customPhone={phoneFormatted}
        customWhatsApp={whatsappNumber}
      />

    </div>
  );
}
