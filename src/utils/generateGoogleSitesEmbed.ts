import { LIBRA_CONFIG } from '../data/config';

export function generateGoogleSitesEmbed(config = LIBRA_CONFIG): string {
  const heroImage = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"; // fallback CDN or embeddable reference
  
  return `<!-- ============================================================
     LIBRA AUTO SOCORRO — CÓDIGO CONSOLIDADO PARA GOOGLE SITES
     Instruções: No Google Sites, clique em 'Inserir' > 'Incorporar' >
     aba 'Incorporar código' e cole este bloco completo.
     Sem dependências externas, CSS isolado e JavaScript puro.
     ============================================================ -->
<div id="libra-embed-wrapper">
  <!-- ESTILOS ISOLADOS -->
  <style>
    #libra-embed-wrapper {
      --libra-navy: #14263B;
      --libra-navy-dark: #0D1A29;
      --libra-yellow: #F5C400;
      --libra-yellow-hover: #E0B200;
      --libra-white: #FFFFFF;
      --libra-bg: #F5F7FA;
      --libra-card-bg: #FFFFFF;
      --libra-border: #E2E8F0;
      --libra-text-primary: #1E293B;
      --libra-text-muted: #64748B;
      
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--libra-bg);
      color: var(--libra-text-primary);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      width: 100%;
    }

    #libra-embed-wrapper *,
    #libra-embed-wrapper *::before,
    #libra-embed-wrapper *::after {
      box-sizing: border-box;
    }

    /* Container base */
    #libra-embed-wrapper .libra-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Top Bar */
    #libra-embed-wrapper .libra-header {
      background-color: var(--libra-navy);
      border-bottom: 2px solid var(--libra-yellow);
      padding: 14px 0;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    #libra-embed-wrapper .libra-header-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
    #libra-embed-wrapper .libra-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: var(--libra-white);
    }
    #libra-embed-wrapper .libra-brand-badge {
      background: var(--libra-yellow);
      color: var(--libra-navy);
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 19px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    #libra-embed-wrapper .libra-brand-text {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: var(--libra-white);
    }
    #libra-embed-wrapper .libra-header-links {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    #libra-embed-wrapper .libra-nav-link {
      color: #CBD5E1;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      transition: color 0.15s ease;
    }
    #libra-embed-wrapper .libra-nav-link:hover {
      color: var(--libra-yellow);
    }
    #libra-embed-wrapper .libra-header-btn {
      background-color: var(--libra-yellow);
      color: var(--libra-navy);
      text-decoration: none;
      padding: 10px 18px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: background-color 0.15s ease, transform 0.1s ease;
      white-space: nowrap;
    }
    #libra-embed-wrapper .libra-header-btn:hover {
      background-color: var(--libra-yellow-hover);
      transform: translateY(-1px);
    }

    /* Hero Section */
    #libra-embed-wrapper .libra-hero {
      background: linear-gradient(180deg, var(--libra-navy) 0%, var(--libra-navy-dark) 100%);
      color: var(--libra-white);
      padding: 56px 0 64px 0;
      position: relative;
    }
    #libra-embed-wrapper .libra-hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 48px;
      align-items: center;
    }
    #libra-embed-wrapper .libra-hero-kicker {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--libra-yellow);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #libra-embed-wrapper .libra-hero-title {
      font-size: clamp(2rem, 3.5vw, 3.25rem);
      font-weight: 800;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin: 0 0 18px 0;
      color: var(--libra-white);
      text-wrap: balance;
    }
    #libra-embed-wrapper .libra-hero-subtitle {
      font-size: 18px;
      color: #E2E8F0;
      line-height: 1.55;
      margin: 0 0 28px 0;
      max-width: 580px;
    }
    #libra-embed-wrapper .libra-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 24px;
    }
    #libra-embed-wrapper .libra-btn-primary {
      background-color: var(--libra-yellow);
      color: var(--libra-navy);
      text-decoration: none;
      padding: 14px 26px;
      border-radius: 8px;
      font-weight: 800;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 2px solid var(--libra-yellow);
      box-shadow: 0 4px 14px rgba(245, 196, 0, 0.35);
      transition: all 0.15s ease;
      cursor: pointer;
      min-height: 48px;
    }
    #libra-embed-wrapper .libra-btn-primary:hover {
      background-color: var(--libra-yellow-hover);
      border-color: var(--libra-yellow-hover);
      transform: translateY(-2px);
    }
    #libra-embed-wrapper .libra-btn-secondary {
      background-color: transparent;
      color: var(--libra-white);
      text-decoration: none;
      padding: 14px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 2px solid #475569;
      transition: all 0.15s ease;
      cursor: pointer;
      min-height: 48px;
    }
    #libra-embed-wrapper .libra-btn-secondary:hover {
      background-color: rgba(255,255,255,0.08);
      border-color: #94A3B8;
      color: var(--libra-white);
    }
    #libra-embed-wrapper .libra-disclaimer-tag {
      font-size: 12px;
      color: #94A3B8;
      line-height: 1.45;
      border-left: 3px solid #475569;
      padding-left: 12px;
      max-width: 520px;
    }
    #libra-embed-wrapper .libra-hero-media {
      background: #1E293B;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: 0 12px 30px rgba(0,0,0,0.4);
      position: relative;
    }
    #libra-embed-wrapper .libra-hero-media img {
      width: 100%;
      height: 380px;
      object-fit: cover;
      display: block;
    }
    #libra-embed-wrapper .libra-hero-media-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 12px 16px;
      background: linear-gradient(180deg, transparent 0%, rgba(13,26,41,0.95) 100%);
      font-size: 12px;
      color: #E2E8F0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* Section Global */
    #libra-embed-wrapper .libra-section {
      padding: 64px 0;
    }
    #libra-embed-wrapper .libra-section-header {
      text-align: center;
      max-width: 720px;
      margin: 0 auto 44px auto;
    }
    #libra-embed-wrapper .libra-section-kicker {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--libra-navy);
      margin-bottom: 8px;
    }
    #libra-embed-wrapper .libra-section-title {
      font-size: clamp(1.75rem, 2.5vw, 2.35rem);
      font-weight: 800;
      letter-spacing: -0.025em;
      color: var(--libra-navy);
      margin: 0 0 14px 0;
    }
    #libra-embed-wrapper .libra-section-desc {
      font-size: 16px;
      color: var(--libra-text-muted);
      margin: 0;
      line-height: 1.6;
    }

    /* 3 Segment Cards */
    #libra-embed-wrapper .libra-segment-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    #libra-embed-wrapper .libra-segment-card {
      background: var(--libra-card-bg);
      border: 1px solid var(--libra-border);
      border-radius: 12px;
      padding: 28px 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 12px rgba(0,0,0,0.04);
      transition: transform 0.15s ease, border-color 0.15s ease;
    }
    #libra-embed-wrapper .libra-segment-card:hover {
      transform: translateY(-3px);
      border-color: #CBD5E1;
    }
    #libra-embed-wrapper .libra-segment-icon {
      width: 48px;
      height: 48px;
      background: #F1F5F9;
      color: var(--libra-navy);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
    }
    #libra-embed-wrapper .libra-segment-audience {
      font-size: 12px;
      font-weight: 700;
      color: var(--libra-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 6px;
    }
    #libra-embed-wrapper .libra-segment-title {
      font-size: 21px;
      font-weight: 800;
      color: var(--libra-navy);
      margin: 0 0 12px 0;
      line-height: 1.25;
    }
    #libra-embed-wrapper .libra-segment-desc {
      font-size: 14px;
      color: var(--libra-text-muted);
      line-height: 1.55;
      margin: 0 0 20px 0;
    }
    #libra-embed-wrapper .libra-segment-bullets {
      list-style: none;
      padding: 0;
      margin: 0 0 24px 0;
    }
    #libra-embed-wrapper .libra-segment-bullets li {
      font-size: 13px;
      color: var(--libra-text-primary);
      padding: 6px 0;
      border-top: 1px solid #F1F5F9;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #libra-embed-wrapper .libra-segment-btn {
      background: var(--libra-navy);
      color: var(--libra-white);
      text-decoration: none;
      text-align: center;
      padding: 12px 18px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      display: block;
      transition: background-color 0.15s ease;
      margin-top: auto;
    }
    #libra-embed-wrapper .libra-segment-btn:hover {
      background-color: #1F3854;
      color: var(--libra-white);
    }

    /* Services Modular Grid */
    #libra-embed-wrapper .libra-services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    #libra-embed-wrapper .libra-service-card {
      background: var(--libra-card-bg);
      border: 1px solid var(--libra-border);
      border-radius: 10px;
      padding: 22px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }
    #libra-embed-wrapper .libra-service-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--libra-navy);
      margin: 0 0 4px 0;
    }
    #libra-embed-wrapper .libra-service-sub {
      font-size: 12px;
      font-weight: 600;
      color: #64748B;
      margin-bottom: 10px;
    }
    #libra-embed-wrapper .libra-service-desc {
      font-size: 13.5px;
      color: var(--libra-text-muted);
      line-height: 1.5;
      margin: 0 0 14px 0;
    }
    #libra-embed-wrapper .libra-service-link {
      font-size: 13px;
      font-weight: 700;
      color: var(--libra-navy);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    #libra-embed-wrapper .libra-service-link:hover {
      color: #B48F00;
      text-decoration: underline;
    }

    /* Coverage Section */
    #libra-embed-wrapper .libra-coverage {
      background: #FFFFFF;
      border-top: 1px solid var(--libra-border);
      border-bottom: 1px solid var(--libra-border);
    }
    #libra-embed-wrapper .libra-coverage-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: start;
    }
    #libra-embed-wrapper .libra-coverage-card {
      background: #F8FAFC;
      border: 1px solid var(--libra-border);
      border-radius: 10px;
      padding: 24px;
    }
    #libra-embed-wrapper .libra-coverage-card-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--libra-navy);
      margin: 0 0 14px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #libra-embed-wrapper .libra-tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    #libra-embed-wrapper .libra-tag {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      padding: 5px 11px;
      border-radius: 6px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--libra-text-primary);
    }
    #libra-embed-wrapper .libra-coverage-notice {
      background: #FEF9C3;
      border: 1px solid #FDE047;
      color: #713F12;
      padding: 16px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.5;
      margin-top: 24px;
    }

    /* Trust Section */
    #libra-embed-wrapper .libra-trust-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    #libra-embed-wrapper .libra-trust-box {
      background: #FFFFFF;
      border: 1px solid var(--libra-border);
      border-radius: 10px;
      padding: 22px;
      text-align: left;
    }
    #libra-embed-wrapper .libra-trust-box h4 {
      font-size: 15px;
      font-weight: 700;
      color: var(--libra-navy);
      margin: 0 0 8px 0;
    }
    #libra-embed-wrapper .libra-trust-box p {
      font-size: 13px;
      color: var(--libra-text-muted);
      line-height: 1.5;
      margin: 0;
    }

    /* Steps Section */
    #libra-embed-wrapper .libra-steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    #libra-embed-wrapper .libra-step-card {
      background: var(--libra-white);
      border: 1px solid var(--libra-border);
      border-radius: 10px;
      padding: 24px;
      position: relative;
    }
    #libra-embed-wrapper .libra-step-num {
      font-size: 28px;
      font-weight: 800;
      color: var(--libra-yellow);
      margin-bottom: 8px;
    }
    #libra-embed-wrapper .libra-step-title {
      font-size: 17px;
      font-weight: 700;
      color: var(--libra-navy);
      margin: 0 0 8px 0;
    }
    #libra-embed-wrapper .libra-step-desc {
      font-size: 13.5px;
      color: var(--libra-text-muted);
      line-height: 1.5;
      margin: 0;
    }

    /* CTA Banner */
    #libra-embed-wrapper .libra-cta-banner {
      background: var(--libra-navy);
      border-radius: 14px;
      padding: 44px 36px;
      text-align: center;
      color: var(--libra-white);
      margin: 30px 0;
      border: 1px solid rgba(255,255,255,0.1);
    }
    #libra-embed-wrapper .libra-cta-title {
      font-size: clamp(1.6rem, 2.8vw, 2.2rem);
      font-weight: 800;
      margin: 0 0 12px 0;
      color: var(--libra-white);
    }
    #libra-embed-wrapper .libra-cta-desc {
      font-size: 16px;
      color: #CBD5E1;
      max-width: 600px;
      margin: 0 auto 28px auto;
    }
    #libra-embed-wrapper .libra-cta-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    /* Footer */
    #libra-embed-wrapper .libra-footer {
      background: #0B1522;
      color: #94A3B8;
      padding: 40px 0 90px 0;
      border-top: 1px solid #1E293B;
      font-size: 13px;
    }
    #libra-embed-wrapper .libra-footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 32px;
      margin-bottom: 30px;
    }
    #libra-embed-wrapper .libra-footer-brand {
      color: var(--libra-white);
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    #libra-embed-wrapper .libra-footer-text {
      line-height: 1.6;
      margin-bottom: 12px;
    }
    #libra-embed-wrapper .libra-footer h5 {
      color: var(--libra-white);
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 12px 0;
    }
    #libra-embed-wrapper .libra-footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    #libra-embed-wrapper .libra-footer li {
      margin-bottom: 8px;
    }
    #libra-embed-wrapper .libra-footer a {
      color: #CBD5E1;
      text-decoration: none;
    }
    #libra-embed-wrapper .libra-footer a:hover {
      color: var(--libra-yellow);
    }
    #libra-embed-wrapper .libra-footer-bottom {
      border-top: 1px solid #1E293B;
      padding-top: 20px;
      text-align: center;
      font-size: 12px;
      color: #64748B;
    }

    /* Mobile Fixed Bottom Bar (<= 15% height constraint) */
    #libra-embed-wrapper .libra-mobile-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--libra-navy);
      border-top: 2px solid var(--libra-yellow);
      padding: 10px 14px;
      z-index: 1000;
      box-shadow: 0 -4px 16px rgba(0,0,0,0.3);
    }
    #libra-embed-wrapper .libra-mobile-bar-inner {
      display: flex;
      gap: 10px;
      max-width: 500px;
      margin: 0 auto;
    }
    #libra-embed-wrapper .libra-mobile-btn-wa {
      flex: 1.3;
      background-color: var(--libra-yellow);
      color: var(--libra-navy);
      font-weight: 800;
      font-size: 15px;
      text-decoration: none;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 6px;
      min-height: 44px;
      text-align: center;
    }
    #libra-embed-wrapper .libra-mobile-btn-tel {
      flex: 0.9;
      background-color: #1F3854;
      color: var(--libra-white);
      font-weight: 700;
      font-size: 15px;
      text-decoration: none;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 12px 6px;
      min-height: 44px;
      border: 1px solid #334E68;
      text-align: center;
    }

    /* Responsive Breakpoints */
    @media (max-width: 900px) {
      #libra-embed-wrapper .libra-hero-grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }
      #libra-embed-wrapper .libra-segment-grid {
        grid-template-columns: 1fr;
      }
      #libra-embed-wrapper .libra-services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      #libra-embed-wrapper .libra-trust-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      #libra-embed-wrapper .libra-steps-grid {
        grid-template-columns: 1fr;
      }
      #libra-embed-wrapper .libra-coverage-grid {
        grid-template-columns: 1fr;
      }
      #libra-embed-wrapper .libra-footer-grid {
        grid-template-columns: 1fr;
      }
      #libra-embed-wrapper .libra-header-links {
        display: none;
      }
    }

    @media (max-width: 600px) {
      #libra-embed-wrapper .libra-services-grid {
        grid-template-columns: 1fr;
      }
      #libra-embed-wrapper .libra-trust-grid {
        grid-template-columns: 1fr;
      }
      #libra-embed-wrapper .libra-hero-actions {
        flex-direction: column;
      }
      #libra-embed-wrapper .libra-btn-primary,
      #libra-embed-wrapper .libra-btn-secondary {
        width: 100%;
        text-align: center;
      }
      #libra-embed-wrapper .libra-mobile-bar {
        display: block;
      }
      #libra-embed-wrapper .libra-hero-media img {
        height: 240px;
      }
    }
  </style>

  <!-- CABEÇALHO -->
  <header class="libra-header">
    <div class="libra-container libra-header-inner">
      <a href="#libra-hero" class="libra-brand">
        <div class="libra-brand-badge">L</div>
        <div class="libra-brand-text">${config.companyName}</div>
      </a>
      <nav class="libra-header-links">
        <a href="#atendimento" class="libra-nav-link">Atendimento</a>
        <a href="#servicos" class="libra-nav-link">Serviços</a>
        <a href="#regiao" class="libra-nav-link">Região</a>
        <a href="#como-funciona" class="libra-nav-link">Como Funciona</a>
      </nav>
      <a href="${config.whatsappBaseUrl}?text=Ol%C3%A1!%20Preciso%20de%20assist%C3%AAncia%20veicular%20com%20a%20Libra." target="_blank" rel="noopener noreferrer" class="libra-header-btn js-track-wa" data-source="header_cta">
        Chamar Socorro
      </a>
    </div>
  </header>

  <!-- HERO / PRIMEIRA TELA -->
  <section id="libra-hero" class="libra-hero">
    <div class="libra-container">
      <div class="libra-hero-grid">
        <div class="libra-hero-content">
          <div class="libra-hero-kicker">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Base em ${config.baseLocation}
          </div>
          <h1 class="libra-hero-title">${config.heroTitle}</h1>
          <p class="libra-hero-subtitle">${config.heroSubtitle}</p>
          
          <div class="libra-hero-actions">
            <a href="${config.whatsappBaseUrl}?text=Ol%C3%A1!%20Preciso%20de%20auto%20socorro%20em%20Bar%C3%A3o%20Geraldo%20ou%20Campinas." target="_blank" rel="noopener noreferrer" class="libra-btn-primary js-track-wa" data-source="hero_whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"/></svg>
              Chamar no WhatsApp
            </a>
            <a href="${config.phoneTelLink}" class="libra-btn-secondary js-track-tel" data-source="hero_phone">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Ligar agora: ${config.phoneFormatted}
            </a>
          </div>

          <div class="libra-disclaimer-tag">
            ${config.heroDisclaimer}
          </div>
        </div>

        <div class="libra-hero-media">
          <img src="${heroImage}" alt="Guincho e Auto Socorro Libra em Campinas" loading="lazy">
          <div class="libra-hero-media-caption">
            <span>Frota de guinchos e veículos de assistência</span>
            <span>Campinas e RMC</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SEGMENTAÇÃO DE ATENDIMENTO -->
  <section id="atendimento" class="libra-section">
    <div class="libra-container">
      <div class="libra-section-header">
        <div class="libra-section-kicker">Direcionamento Rápido</div>
        <h2 class="libra-section-title">Qual é o seu tipo de necessidade?</h2>
        <p class="libra-section-desc">Selecione o atendimento ideal para abrir o WhatsApp com mensagem já preparada para o seu veículo.</p>
      </div>

      <div class="libra-segment-grid">
        ${config.segmentations.map(seg => `
          <div class="libra-segment-card">
            <div>
              <div class="libra-segment-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1L2 12v4h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>
              </div>
              <div class="libra-segment-audience">${seg.targetAudience}</div>
              <h3 class="libra-segment-title">${seg.title}</h3>
              <p class="libra-segment-desc">${seg.description}</p>
              <ul class="libra-segment-bullets">
                ${(seg.bulletPoints ?? []).map((bp: string) => `
                  <li>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5C400" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>${bp}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            <a href="${config.whatsappBaseUrl}?text=${encodeURIComponent(seg.whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="libra-segment-btn js-track-wa" data-source="segment_${seg.id}">
              ${seg.ctaText}
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- SERVIÇOS MODULARES -->
  <section id="servicos" class="libra-section" style="background-color: #FFFFFF; border-top: 1px solid #E2E8F0;">
    <div class="libra-container">
      <div class="libra-section-header">
        <div class="libra-section-kicker">Catálogo de Serviços</div>
        <h2 class="libra-section-title">Assistência modular e transporte</h2>
        <p class="libra-section-desc">Serviços sujeitos à confirmação prévia com o operador da Libra conforme rota e veículo.</p>
      </div>

      <div class="libra-services-grid">
        ${config.services.map(srv => `
          <div class="libra-service-card">
            <h3 class="libra-service-title">${srv.title}</h3>
            <div class="libra-service-sub">${srv.subtitle}</div>
            <p class="libra-service-desc">${srv.description}</p>
            <a href="${config.whatsappBaseUrl}?text=${encodeURIComponent(srv.whatsappMessage)}" target="_blank" rel="noopener noreferrer" class="libra-service-link js-track-wa" data-source="service_${srv.id}">
              Verificar disponibilidade &rarr;
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- REGIÃO ATENDIDA -->
  <section id="regiao" class="libra-section libra-coverage">
    <div class="libra-container">
      <div class="libra-section-header">
        <div class="libra-section-kicker">Área de Atuação</div>
        <h2 class="libra-section-title">Barão Geraldo, Campinas e Rodovias da RMC</h2>
        <p class="libra-section-desc">Apresentamos as principais localidades atendidas. O tempo de resposta e deslocamento varia conforme o trânsito e condições do local.</p>
      </div>

      <div class="libra-coverage-grid">
        <div class="libra-coverage-card">
          <h3 class="libra-coverage-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Campinas e Distritos de Referência
          </h3>
          <div class="libra-tag-list">
            ${config.coverage.districtsCampinas.map(dist => `<span class="libra-tag">${dist}</span>`).join('')}
          </div>
          <div style="margin-top: 20px;">
            <h4 style="font-size: 14px; font-weight: 700; color: #1E293B; margin-bottom: 10px;">Cidades Vizinhas Informadas</h4>
            <div class="libra-tag-list">
              ${config.coverage.neighboringCities.map(city => `<span class="libra-tag" style="background:#F1F5F9;">${city}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="libra-coverage-card">
          <h3 class="libra-coverage-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
            Rodovias e Acessos Metropolitanos
          </h3>
          <div class="libra-tag-list">
            ${config.coverage.mainHighways.map(hw => `<span class="libra-tag" style="border-color:#F5C400;">${hw}</span>`).join('')}
          </div>
          
          <div class="libra-coverage-notice">
            <strong>Importante:</strong> ${config.coverage.notice}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PILARES DE CONFIANÇA -->
  <section class="libra-section">
    <div class="libra-container">
      <div class="libra-section-header">
        <div class="libra-section-kicker">Compromisso Real</div>
        <h2 class="libra-section-title">Por que entrar em contato com a Libra?</h2>
        <p class="libra-section-desc">Atendimento baseado em dados reais, seriedade e respeito ao patrimônio do cliente.</p>
      </div>

      <div class="libra-trust-grid">
        ${config.trustPillars.map(p => `
          <div class="libra-trust-box">
            <h4>${p.title}</h4>
            <p>${p.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- COMO FUNCIONA -->
  <section id="como-funciona" class="libra-section" style="background: #FFFFFF; border-top: 1px solid #E2E8F0;">
    <div class="libra-container">
      <div class="libra-section-header">
        <div class="libra-section-kicker">Simples e Direto</div>
        <h2 class="libra-section-title">Como solicitar seu atendimento</h2>
        <p class="libra-section-desc">Sem cadastro demorado ou intermediários. O contato é direto com a equipe operacional.</p>
      </div>

      <div class="libra-steps-grid">
        ${config.steps.map(step => `
          <div class="libra-step-card">
            <div class="libra-step-num">${step.step}</div>
            <h3 class="libra-step-title">${step.title}</h3>
            <p class="libra-step-desc">${step.description}</p>
          </div>
        `).join('')}
      </div>

      <!-- CTA BANNER -->
      <div class="libra-cta-banner">
        <h3 class="libra-cta-title">Precisa de auto socorro agora?</h3>
        <p class="libra-cta-desc">Fale diretamente pelo WhatsApp ou ligue para informar sua localização em Barão Geraldo ou Campinas.</p>
        <div class="libra-cta-buttons">
          <a href="${config.whatsappBaseUrl}?text=Ol%C3%A1!%20Preciso%20de%20socorro%20veicular%20urgente%20em%20Campinas." target="_blank" rel="noopener noreferrer" class="libra-btn-primary js-track-wa" data-source="footer_banner_wa">
            Chamar no WhatsApp
          </a>
          <a href="${config.phoneTelLink}" class="libra-btn-secondary js-track-tel" data-source="footer_banner_tel">
            Ligar para ${config.phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- RODAPÉ -->
  <footer class="libra-footer">
    <div class="libra-container">
      <div class="libra-footer-grid">
        <div>
          <div class="libra-footer-brand">${config.companyName}</div>
          <p class="libra-footer-text">
            Assistência veicular, socorro elétrico e mecânico e guincho plataforma com base em Barão Geraldo, atendendo Campinas e rodovias da Região Metropolitana.
          </p>
          <p class="libra-footer-text" style="color: #64748B;">
            Base de Saída: ${config.baseAddress}
          </p>
        </div>

        <div>
          <h5>Canais de Atendimento</h5>
          <ul>
            <li>
              WhatsApp: <a href="${config.whatsappBaseUrl}" target="_blank" rel="noopener noreferrer" class="js-track-wa" data-source="footer_link_wa">${config.phoneFormatted}</a>
            </li>
            <li>
              Telefone: <a href="${config.phoneTelLink}" class="js-track-tel" data-source="footer_link_tel">${config.phoneFormatted}</a>
            </li>
            <li>Base: Barão Geraldo — Campinas/SP</li>
          </ul>
        </div>

        <div>
          <h5>Avisos Importantes</h5>
          <p style="font-size: 12px; line-height: 1.5; color: #64748B;">
            A disponibilidade de viaturas e prazos de chegada dependem do trânsito no anel viário e rodovias. Confirme valores e condições diretamente com o operador no momento do contato.
          </p>
        </div>
      </div>

      <div class="libra-footer-bottom">
        <p>© ${new Date().getFullYear()} ${config.companyName}. Todos os direitos reservados. Barão Geraldo, Campinas - SP.</p>
        <p style="margin-top: 6px; font-size: 11px;">${config.legalDisclaimer}</p>
      </div>
    </div>
  </footer>

  <!-- BARRA FIXA MOBILE (Inferior, <= 15% da tela) -->
  <div class="libra-mobile-bar" id="libra-mobile-bar">
    <div class="libra-mobile-bar-inner">
      <a href="${config.whatsappBaseUrl}?text=Ol%C3%A1!%20Preciso%20de%20auto%20socorro%20com%20a%20Libra." target="_blank" rel="noopener noreferrer" class="libra-mobile-btn-wa js-track-wa" data-source="sticky_bar_whatsapp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z"/></svg>
        <span>WhatsApp</span>
      </a>
      <a href="${config.phoneTelLink}" class="libra-mobile-btn-tel js-track-tel" data-source="sticky_bar_phone">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>Ligar</span>
      </a>
    </div>
  </div>

  <!-- SCRIPT PURO E MEDIÇÃO DE CONVERSÃO -->
  <script>
    (function() {
      // Função central de registro de cliques em botões de contato
      function registerLeadClick(type, source) {
        var eventData = {
          event: 'contact_interaction',
          contact_type: type, // 'whatsapp' ou 'phone'
          interaction_source: source || 'unknown',
          company: '${config.companyName}',
          timestamp: new Date().toISOString()
        };

        // 1. Google Tag Manager / dataLayer
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
          window.dataLayer.push(eventData);
        }

        // 2. Google Analytics 4 (gtag)
        if (typeof window.gtag === 'function') {
          window.gtag('event', type === 'whatsapp' ? 'click_whatsapp' : 'click_phone', {
            'event_category': 'Contact',
            'event_label': source,
            'value': 1
          });
        }

        // 3. Fallback de log para validação e testes
        try {
          console.log('[Libra Tracking] Clique de contato registrado (não representa atendimento concluído):', eventData);
        } catch(e) {}
      }

      // Adiciona ouvintes para WhatsApp
      var waButtons = document.querySelectorAll('#libra-embed-wrapper .js-track-wa');
      for (var i = 0; i < waButtons.length; i++) {
        waButtons[i].addEventListener('click', function(e) {
          var src = this.getAttribute('data-source');
          registerLeadClick('whatsapp', src);
        });
      }

      // Adiciona ouvintes para Telefone
      var telButtons = document.querySelectorAll('#libra-embed-wrapper .js-track-tel');
      for (var j = 0; j < telButtons.length; j++) {
        telButtons[j].addEventListener('click', function(e) {
          var src = this.getAttribute('data-source');
          registerLeadClick('phone', src);
        });
      }
    })();
  </script>
</div>
<!-- FIM DO BLOCO PARA GOOGLE SITES -->`;
}
