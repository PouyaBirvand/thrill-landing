'use client'

import React, { useRef, useEffect, useCallback, useState } from 'react';

const CursorSpotlight = ({ 
  spacing = 40,                    
  maxDistance = 150,               
  dotSize = 2,                    
  rippleSpeed = 180,               
  rippleDuration = 3000,          
  waveThickness = 3,             
  dotColor = '#5CFFC1',       
  glowIntensity = 0,         
  pulseStrength = 2        
}) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseInside, setMouseInside] = useState(false);
  const [ripples, setRipples] = useState([]);
  const animationId = useRef(null);
  const dotsGrid = useRef([]);
  const rippleId = useRef(0);
  const mouseThrottleId = useRef(null);
  const leaveThrottleId = useRef(null);

  const hexToRgb = useCallback((hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 130, b: 246 };
  }, []);

  const baseColor = hexToRgb(dotColor);

  const calculateDistance = useCallback((x1, y1, x2, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const isInHeroVideoArea = useCallback((x, y) => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return false;

    const rect = heroSection.getBoundingClientRect();
    const heroTop = rect.top + window.scrollY;
    const heroBottom = heroTop + rect.height;
    
    if (y < heroTop || y > heroBottom) return false;
    
    const windowWidth = window.innerWidth;
    const centerZone = windowWidth * 0.5; 
    const leftVideoZone = (windowWidth - centerZone) / 2;
    const rightVideoZone = windowWidth - leftVideoZone;
    
    return x < leftVideoZone || x > rightVideoZone;
  }, []);

  const isInFooterVideoArea = useCallback((x, y) => {
    const footerSection = document.getElementById('footer');
    if (!footerSection) return false;

    const rect = footerSection.getBoundingClientRect();
    const footerTop = rect.top + window.scrollY + 170;
    const footerBottom = footerTop + rect.height + 170;
    
    if (y < footerTop || y > footerBottom) return false;
    
    const windowWidth = window.innerWidth;
    const centerZone = windowWidth * 0.55; 
    const leftVideoZone = (windowWidth - centerZone) / 3;
    const rightVideoZone = windowWidth - leftVideoZone;
    
    return x < leftVideoZone || x > rightVideoZone;
  }, []);

  const isInteractiveElement = useCallback((element) => {
    if (!element) return false;
    
    const interactiveTags = ['BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'A', 'LABEL'];
    const interactiveRoles = ['button', 'link', 'tab', 'option', 'menuitem'];
    const interactiveTypes = ['button', 'submit', 'reset', 'checkbox', 'radio'];
    
    if (interactiveTags.includes(element.tagName)) {
      return true;
    }
    
    if (element.type && interactiveTypes.includes(element.type)) {
      return true;
    }
    
    if (element.getAttribute('role') && interactiveRoles.includes(element.getAttribute('role'))) {
      return true;
    }
    
    if (element.classList && (
      element.classList.contains('btn') ||
      element.classList.contains('button') ||
      element.classList.contains('clickable') ||
      element.classList.contains('interactive')
    )) {
      return true;
    }
    
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.cursor === 'pointer') {
      return true;
    }
    
    if (element.onclick || element.getAttribute('onclick')) {
      return true;
    }
    
    return false;
  }, []);

  const shouldCreateRipple = useCallback((e) => {
    let element = e.target;
    
    while (element && element !== document.body) {
      if (isInteractiveElement(element)) {
        return false;
      }
      element = element.parentElement;
    }
    
    return true;
  }, [isInteractiveElement]);

  const addRipple = useCallback((x, y) => {
    const newRipple = {
      id: rippleId.current++,
      x,
      y,
      startTime: Date.now()
    };
    
    setRipples(prev => [...prev.filter(r => Date.now() - r.startTime < rippleDuration), newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, rippleDuration);
  }, [rippleDuration]);

  const getRippleIntensity = useCallback((dotX, dotY, currentTime) => {
    let maxIntensity = 0;
    
    ripples.forEach(ripple => {
      const elapsed = currentTime - ripple.startTime;
      if (elapsed > rippleDuration) return;
      
      const distance = calculateDistance(dotX, dotY, ripple.x, ripple.y);
      const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.5;
      const currentRadius = (elapsed / rippleDuration) * maxRadius;
      
      const actualThickness = waveThickness * spacing * 0.8;
      const distanceFromWave = Math.abs(distance - currentRadius);
      
      if (distanceFromWave <= actualThickness) {
        const waveProgress = elapsed / rippleDuration;
        const thicknessPosition = 1 - (distanceFromWave / actualThickness);
        const timeDecay = Math.max(0, 1 - Math.pow(waveProgress, 1.2));
        const pulseEffect = (Math.sin(waveProgress * Math.PI * 3) * 0.3 + 0.7);
        
        const intensity = thicknessPosition * timeDecay * pulseEffect * pulseStrength;
        maxIntensity = Math.max(maxIntensity, intensity);
      }
    });
    
    return maxIntensity;
  }, [ripples, calculateDistance, rippleDuration, spacing, waveThickness, pulseStrength]);

  const initializeGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dots = [];
    const cols = Math.ceil(canvas.width / spacing) + 3;
    const rows = Math.ceil(canvas.height / spacing) + 3;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: col * spacing,
          y: row * spacing
        });
      }
    }

    dotsGrid.current = dots;
  }, [spacing]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const drawDots = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const currentTime = Date.now();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // اگر موس داخل نیست و هیچ ripple ای نداریم، کنوس رو پاک کن و انیمیشن رو متوقف کن
    if (!mouseInside && ripples.length === 0) {
      return;
    }

    dotsGrid.current.forEach(dot => {
      const absoluteY = dot.y + window.scrollY;
      if (isInHeroVideoArea(dot.x, absoluteY) || isInFooterVideoArea(dot.x, absoluteY)) {
        return; 
      }

      const mouseOpacity = mouseInside ? (() => {
        const mouseDistance = calculateDistance(dot.x, dot.y, mousePos.x, mousePos.y);
        return mouseDistance < maxDistance 
          ? Math.max(0, (maxDistance - mouseDistance) / maxDistance)
          : 0;
      })() : 0;

      const rippleIntensity = getRippleIntensity(dot.x, dot.y, currentTime);
      const totalOpacity = Math.min(1, mouseOpacity + rippleIntensity);

      if (totalOpacity > 0.02) {
        const radius = dotSize / 2;
        const rippleScale = rippleIntensity > 0 ? 1 + (rippleIntensity * 0.3) : 1;
        const finalRadius = radius * rippleScale;

        if (totalOpacity > 0.3) {
          const glowSize = 6 + (rippleIntensity * 8);
          const glowOpacity = totalOpacity * glowIntensity * 0.6;
          
          const gradient = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, glowSize
          );
          gradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${glowOpacity})`);
          gradient.addColorStop(1, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${totalOpacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, finalRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, [mousePos, mouseInside, calculateDistance, getRippleIntensity, maxDistance, dotSize, baseColor, glowIntensity, isInHeroVideoArea, isInFooterVideoArea, ripples.length]);

  const animate = useCallback(() => {
    drawDots();
    animationId.current = requestAnimationFrame(animate);
  }, [drawDots]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initializeGrid();
  }, [initializeGrid]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // کنسل کردن هر leave timeout قبلی
      if (leaveThrottleId.current) {
        clearTimeout(leaveThrottleId.current);
        leaveThrottleId.current = null;
      }

      if (mouseThrottleId.current) return;
      
      mouseThrottleId.current = setTimeout(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        setMouseInside(true);
        mouseThrottleId.current = null;
      }, 16);
    };

    const handleMouseLeave = () => {
      // کنسل کردن هر mouse move timeout قبلی
      if (mouseThrottleId.current) {
        clearTimeout(mouseThrottleId.current);
        mouseThrottleId.current = null;
      }

      // تاخیر در پاک کردن تا اطمینان حاصل شه که انیمیشن اجرا شده
      leaveThrottleId.current = setTimeout(() => {
        setMouseInside(false);
        clearCanvas();
        leaveThrottleId.current = null;
      }, 50); // کمی بیشتر از mouse move throttle
    };

    const handleClick = (e) => {
      if (shouldCreateRipple(e)) {
        addRipple(e.clientX, e.clientY);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setMouseInside(false);
        clearCanvas();
      }
    };

    const handleBlur = () => {
      setMouseInside(false);
      clearCanvas();
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('resize', resizeCanvas, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('resize', resizeCanvas);
      
      // پاک کردن timeouts
      if (mouseThrottleId.current) {
        clearTimeout(mouseThrottleId.current);
      }
      if (leaveThrottleId.current) {
        clearTimeout(leaveThrottleId.current);
      }
    };
  }, [addRipple, resizeCanvas, shouldCreateRipple, clearCanvas]);

  useEffect(() => {
    resizeCanvas();
    animationId.current = requestAnimationFrame(animate);

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [animate, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        background: 'transparent'
      }}
    />
  );
};

export default CursorSpotlight;