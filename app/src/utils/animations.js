import gsap from 'gsap';

export const init3DTilt = () => {
  const cards = document.querySelectorAll('.evidence-card');
  
  cards.forEach((card) => {
    if (card.dataset.tiltInit) return;
    card.dataset.tiltInit = 'true';

    // Infer a base rotation from the class list or just use 0 if not easily inferable.
    // We'll let GSAP remove the CSS transform by setting a new one.
    let baseRotation = 0;
    const match = card.className.match(/rotate-\[(-?[0-9.]+)deg\]/);
    if (match && match[1]) {
      baseRotation = parseFloat(match[1]);
    }

    card.parentElement.style.perspective = '1200px';
    card.style.transformStyle = 'preserve-3d';
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (max 4 degrees)
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      gsap.to(card, {
        duration: 0.3,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: 0, 
        z: 15,
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.95), 0 -5px 20px rgba(0,0,0,0.5)',
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.7,
        rotateX: 0,
        rotateY: 0,
        rotateZ: baseRotation,
        z: 0,
        boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
        ease: 'elastic.out(1.2, 0.4)',
        overwrite: 'auto'
      });
    });
  });
};

export const initYarnPhysics = () => {
  const yarns = document.querySelectorAll('.yarn-path');
  
  yarns.forEach((yarn) => {
    if (yarn.dataset.yarnInit) return;
    yarn.dataset.yarnInit = 'true';

    yarn.addEventListener('mouseenter', () => {
      gsap.to(yarn, {
        duration: 0.15,
        strokeWidth: 4.5,
        stroke: '#ffb4ab',
        filter: 'drop-shadow(0 4px 10px rgba(255, 180, 171, 0.9))',
        ease: 'power2.out'
      });
    });
    
    yarn.addEventListener('mouseleave', () => {
      // Elastic spring back
      gsap.to(yarn, {
        duration: 1.2,
        strokeWidth: (i, target) => target.getAttribute('stroke-width') || 2.5,
        stroke: 'url(#yarnGradient)',
        filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 7px rgba(220, 38, 38, 0.45))',
        ease: 'elastic.out(1.5, 0.2)'
      });
    });
  });
};
