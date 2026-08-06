document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const mobileCta = document.querySelector('.mobile-cta');
  const preorderSection = document.getElementById('apply') || document.getElementById('preorder');
  const DEFAULT_WIDGET = '1639295';

  if (!popup) return;

  const showWidget = (widgetId) => {
    popup.querySelectorAll('.widget-host').forEach((host) => {
      const match = host.getAttribute('data-widget') === widgetId;
      host.hidden = !match;
      if (match) {
        host.style.height = 'auto';
        const iframe = host.querySelector('iframe');
        if (iframe && parseInt(iframe.style.height, 10) < 100) {
          iframe.style.height = '600px';
        }
      }
    });
  };

  const openPopup = (btn) => {
    const widgetId = (btn && btn.getAttribute('data-widget')) || DEFAULT_WIDGET;
    showWidget(widgetId);

    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (mobileCta) mobileCta.hidden = true;
  };

  const closePopup = () => {
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (mobileCta) mobileCta.hidden = false;
  };

  document.querySelectorAll('.js-open-popup').forEach((btn) => {
    btn.addEventListener('click', () => openPopup(btn));
  });

  document.querySelectorAll('.js-close-popup').forEach((btn) => {
    btn.addEventListener('click', closePopup);
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) closePopup();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('open')) {
      closePopup();
    }
  });

  if (mobileCta && preorderSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (popup.classList.contains('open')) return;
        mobileCta.hidden = entry.isIntersecting;
      },
      { threshold: 0.15, rootMargin: '0px 0px -72px 0px' }
    );
    observer.observe(preorderSection);
  }
});
