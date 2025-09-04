'use client'
import React, { useRef, useEffect, useCallback, useState } from 'react';

const CursorSpotlight = ({ 
  spacing = 40,                    // فاصله بین نقطه‌ها
  maxDistance = 150,               // شعاع نور موس
  dotSize = 2,                     // اندازه نقطه‌ها
  rippleSpeed = 180,               // سرعت پخش موج
  rippleDuration = 3000,           // مدت زمان کل موج
  waveThickness = 3,               // ضخامت موج
  dotColor = '#5CFFC1',           // رنگ نقطه‌ها
  glowIntensity = 0,            // شدت نور
  pulseStrength = 2             // قدرت تپش
}) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const animationId = useRef(null);
  const dotsGrid = useRef([]);
  const rippleId = useRef(0);

  // رنگ hex به rgb
  const hexToRgb = useCallback((hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 130, b: 246 };
  }, []);

  const baseColor = hexToRgb(dotColor);

  // محاسبه فاصله
  const calculateDistance = useCallback((x1, y1, x2, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  // اضافه کردن ripple
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

  // محاسبه شدت ripple
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

  // ایجاد grid نقطه‌ها
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

  // رسم نقطه‌ها
  const drawDots = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const currentTime = Date.now();

    // پاک کردن canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dotsGrid.current.forEach(dot => {
      // شدت نور موس
      const mouseDistance = calculateDistance(dot.x, dot.y, mousePos.x, mousePos.y);
      const mouseOpacity = mouseDistance < maxDistance 
        ? Math.max(0, (maxDistance - mouseDistance) / maxDistance)
        : 0;

      // شدت ripple
      const rippleIntensity = getRippleIntensity(dot.x, dot.y, currentTime);

      // ترکیب افکت‌ها
      const totalOpacity = Math.min(1, mouseOpacity + rippleIntensity);

      if (totalOpacity > 0.02) {
        // اندازه ثابت برای همه نقطه‌ها
        const radius = dotSize / 2;
        
        // فقط در موج، اندازه کمی تغییر کند
        const rippleScale = rippleIntensity > 0 ? 1 + (rippleIntensity * 0.3) : 1;
        const finalRadius = radius * rippleScale;

        // رسم گلو (shadow) فقط برای نقطه‌های روشن
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

        // رسم نقطه اصلی با opacity متغیر
        ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${totalOpacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, finalRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, [mousePos, calculateDistance, getRippleIntensity, maxDistance, dotSize, baseColor, glowIntensity]);

  // انیمیشن لوپ
  const animate = useCallback(() => {
    drawDots();
    animationId.current = requestAnimationFrame(animate);
  }, [drawDots]);

  // تنظیم اندازه canvas
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initializeGrid();
  }, [initializeGrid]);

  // Mouse handlers
  useEffect(() => {
    let throttleId = null;
    
    const handleMouseMove = (e) => {
      if (throttleId) return;
      
      throttleId = setTimeout(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        throttleId = null;
      }, 16);
    };

    const handleClick = (e) => {
      addRipple(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resizeCanvas);
      if (throttleId) clearTimeout(throttleId);
    };
  }, [addRipple, resizeCanvas]);

  // راه‌اندازی اولیه
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