document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const mobileCta = document.querySelector('.mobile-cta');
  const preorderSection = document.getElementById('apply') || document.getElementById('preorder');

  if (!popup) return;

  const openPopup = () => {
    popup.classList.add('open');
    popup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (mobileCta) mobileCta.hidden = true;

    const host = popup.querySelector('.widget-host');
    if (host) host.style.height = 'auto';
    const iframe = popup.querySelector('iframe');
    if (iframe && parseInt(iframe.style.height, 10) < 100) {
      iframe.style.height = '600px';
    }
  };

  const closePopup = () => {
    popup.classList.remove('open');
    popup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (mobileCta) mobileCta.hidden = false;
  };

  document.querySelectorAll('.js-open-popup').forEach((btn) => {
    btn.addEventListener('click', openPopup);
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
