import { useEffect, useState, useCallback, useRef } from 'react';
import { initYarnPhysics } from '../utils/animations';

export default function CrimsonThreads({ visible }) {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);

  const updatePaths = useCallback(() => {
    if (!svgRef.current || !visible) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    
    // Define the specific curated connections (the main storyline)
    const connections = [
      { start: 'node-hero', end: 'node-philosophy', weight: 2.5, dash: 'none' },
      { start: 'node-hero', end: 'node-experience', weight: 2.2, dash: 'none' },
      { start: 'node-hero', end: 'node-project-0', weight: 2.6, dash: 'none' },
      { start: 'node-hero', end: 'node-project-1', weight: 2.1, dash: '7,3', opacity: 0.8 },
      { start: 'node-hero', end: 'node-achievements', weight: 2.4, dash: 'none' },
      { start: 'node-tech', end: 'node-project-2', weight: 1.8, dash: '5,5', opacity: 0.65 },
      { start: 'node-project-0', end: 'node-project-1', weight: 1.5, dash: '4,4', opacity: 0.5 },
      { start: 'node-philosophy', end: 'node-tech', weight: 1.8, dash: 'none', opacity: 0.7 },
      { start: 'node-achievements', end: 'node-chat', weight: 1.7, dash: '6,4', opacity: 0.6 },
      { start: 'node-hero', end: 'node-chat', weight: 1.4, dash: '4,4', opacity: 0.4 },
    ];

    // AUTO-DISCOVERY: Automatically find any new nodes added to the board
    const allEvidenceNodes = Array.from(document.querySelectorAll('.evidence-card[id^="node-"]'));
    const manuallyConnected = new Set();
    connections.forEach(c => { manuallyConnected.add(c.start); manuallyConnected.add(c.end); });

    allEvidenceNodes.forEach((node, index) => {
      if (!manuallyConnected.has(node.id)) {
        // If a new node is found, automatically connect it to the master dossier (Hero)
        connections.push({
          start: 'node-hero',
          end: node.id,
          weight: 1.5 + (index % 3) * 0.3, // slight variance
          dash: index % 2 === 0 ? 'none' : '5,5',
          opacity: 0.6 + (index % 4) * 0.1
        });
        
        // Create a secondary web connection to the previous node (if it exists)
        if (index > 0) {
          connections.push({
            start: allEvidenceNodes[index - 1].id,
            end: node.id,
            weight: 1.2,
            dash: '3,3',
            opacity: 0.4
          });
        }
      }
    });

    const newPaths = [];

    const getElementCenter = (id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      // Prefer connecting directly to the pushpin for maximum realism
      const pin = el.querySelector('.pushpin');
      const target = pin || el;
      const rect = target.getBoundingClientRect();
      
      // Calculate coordinates relative to the absolute SVG container
      return {
        x: rect.left + rect.width / 2 - svgRect.left,
        y: rect.top + rect.height / 2 - svgRect.top
      };
    };

    connections.forEach((conn, idx) => {
      const start = getElementCenter(conn.start);
      const end = getElementCenter(conn.end);
      
      if (start && end) {
        // Calculate physics/geometry for realistic sagging string
        const dist = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        
        // Sag is proportional to distance, mimicking gravity
        const sag = Math.min(dist * 0.12, 100); 
        
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2 + sag;
        
        newPaths.push({
          id: `path-${idx}`,
          d: `M ${start.x},${start.y} Q ${midX},${midY} ${end.x},${end.y}`,
          weight: conn.weight,
          dash: conn.dash,
          opacity: conn.opacity || 1
        });
      }
    });
    
    setPaths(newPaths);
  }, [visible]);

  useEffect(() => {
    // We update paths multiple times during initial load to account for fonts, images, and layout shifts
    const timer1 = setTimeout(updatePaths, 50);
    const timer2 = setTimeout(updatePaths, 300);
    const timer3 = setTimeout(updatePaths, 1000);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updatePaths();
      }, 150); // Debounce resize to prevent layout thrashing
    };
    window.addEventListener('resize', handleResize);
    
    // Optional: MutationObserver or ResizeObserver on the board could make it 100% robust,
    // but a resize event is usually enough for responsive layouts.
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [updatePaths]);

  // Re-initialize GSAP yarn physics whenever paths change
  useEffect(() => {
    if (paths.length > 0 && visible) {
      // Small timeout to ensure DOM paths are rendered
      setTimeout(initYarnPhysics, 50);
    }
  }, [paths, visible]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none z-[15] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <defs>
        <linearGradient id="yarnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff998f" />
          <stop offset="45%" stopColor="#d32f2f" />
          <stop offset="100%" stopColor="#70000a" />
        </linearGradient>
      </defs>
      {paths.map((p) => (
        <path
          key={p.id}
          className="yarn-path cursor-crosshair" 
          d={p.d}
          fill="none"
          stroke="url(#yarnGradient)"
          strokeWidth={p.weight}
          strokeDasharray={p.dash}
          opacity={p.opacity}
          style={{ pointerEvents: 'stroke' }}
        />
      ))}
    </svg>
  );
}
