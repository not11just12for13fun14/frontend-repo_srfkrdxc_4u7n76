import React, { useRef, useEffect, useState, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Lazy-load Spline to avoid blank screen if WebGL/asset fails to initialize
const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // As user scrolls, fade and subtle blur the visual to "dissolve" it
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.6], [0, 12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [mounted, setMounted] = useState(false);
  const [splineError, setSplineError] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="relative h-[110vh] bg-black overflow-hidden">
      {/* Spline full-width cover background (client-only, lazy) */}
      <motion.div style={{ opacity, filter: blur.to(v => `blur(${v}px)`), y }} className="absolute inset-0">
        {mounted && !splineError ? (
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <LazySpline
              scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
              onError={(e) => setSplineError(e?.message || 'Failed to load 3D scene')}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </motion.div>

      {/* Subtle gradient overlay to blend with black background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 sm:pt-48">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] max-w-4xl"
        >
          You make the art, we do the rest.
        </motion.h1>
        {splineError && (
          <p className="mt-4 text-sm text-white/50">3D scene unavailable right now. The rest of the page is fully functional.</p>
        )}
      </div>

      {/* Cinematic dissolve mask using pseudo grid lines */}
      <motion.div
        aria-hidden
        style={{ opacity: useTransform(scrollYProgress, [0.1, 0.9], [0, 1]) }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-10">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="bg-white/5" />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
