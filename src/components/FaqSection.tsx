import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="bg-white py-16 md:py-24 border-t border-slate-100"
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#061B3D]/10 text-[#061B3D] text-xs font-bold tracking-widest uppercase mb-4">
            Perguntas Frequentes
          </div>
          <h2
            id="faq-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#061B3D] leading-tight"
          >
            DÚVIDAS SOBRE O ATENDIMENTO?
          </h2>
        </div>

        {/* Accordion */}
        <dl className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-btn-${i}`;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#FFD400]/60 bg-[#061B3D]/3'
                    : 'border-slate-200 bg-white hover:border-[#FFD400]/40'
                }`}
              >
                <dt>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD400] focus-visible:ring-offset-1 rounded-2xl"
                  >
                    <span className="font-bold text-[#061B3D] text-sm sm:text-base leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFD400] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
};
