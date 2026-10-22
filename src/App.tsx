import React, { useState } from 'react';
import { LIBRA_CONFIG } from './data/config';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SegmentCards } from './components/SegmentCards';
import { ServicesGrid } from './components/ServicesGrid';
import { TrustSection } from './components/TrustSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
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

  const handleTrack = (type: 'whatsapp' | 'phone', source: string) => {
    const timestamp = new Date().toLocaleTimeString('pt-BR');
    const newEvent = { type, source, timestamp };
    setTrackedEvents(prev => [newEvent, ...prev]);

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

    console.info(
      `[Libra Tracking] Intenção de contato: Tipo=${type}, Origem=${source}. (Representa intenção, não atendimento concluído).`
    );
  };

  // Shared page sections — reused in both desktop and mobile views
  const pageContent = (
    <>
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
        title={LIBRA_CONFIG.heroTitle}
        subtitle={LIBRA_CONFIG.heroSubtitle}
        heroDescription={LIBRA_CONFIG.heroDescription}
        heroHighlights={LIBRA_CONFIG.heroHighlights}
        disclaimer={LIBRA_CONFIG.heroDisclaimer}
      />

      <SegmentCards
        segments={LIBRA_CONFIG.segments}
        whatsappBaseUrl={whatsappBaseUrl}
        onTrack={handleTrack}
      />

      <ServicesGrid
        services={LIBRA_CONFIG.services}
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

      <AboutSection
        title={LIBRA_CONFIG.aboutTitle}
        paragraphs={LIBRA_CONFIG.aboutText}
      />

      <FaqSection items={LIBRA_CONFIG.faqItems} />

      <CtaSection
        title={LIBRA_CONFIG.ctaTitle}
        text={LIBRA_CONFIG.ctaText}
        buttonText={LIBRA_CONFIG.ctaButtonText}
        whatsappMessage={LIBRA_CONFIG.ctaWhatsappMessage}
        whatsappBaseUrl={whatsappBaseUrl}
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

      <MobileFixedBar
        whatsappBaseUrl={whatsappBaseUrl}
        phoneTelLink={phoneTelLink}
        phoneFormatted={phoneFormatted}
        onTrack={handleTrack}
      />
    </>
  );

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-800 flex flex-col font-sans">

      {/* Dev toolbar */}
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

      {viewMode === 'mobile' ? (
        /* Mobile simulator frame */
        <div className="flex-1 bg-slate-900 py-8 px-4 flex items-center justify-center overflow-x-hidden">
          <div className="w-[375px] max-w-full bg-[#F5F7FA] rounded-[38px] border-[10px] border-slate-800 shadow-2xl overflow-hidden relative flex flex-col h-[780px]">
            <div className="bg-slate-800 h-6 w-36 mx-auto rounded-b-xl flex items-center justify-center shrink-0 z-50">
              <div className="w-10 h-1 bg-slate-600 rounded-full" />
            </div>
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
              {pageContent}
            </div>
          </div>
        </div>
      ) : (
        <main className="flex-1 flex flex-col">
          {pageContent}
        </main>
      )}

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
