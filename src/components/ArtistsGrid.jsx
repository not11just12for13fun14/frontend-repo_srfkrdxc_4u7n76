import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ArtistsGrid() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const reveal = useTransform(scrollYProgress, [0, 0.6], [0.3, 1]);

  const items = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-${
      [
        '1517841905240-472988babdf9', // portrait
        '1520970210240-8f6f4b5f7ec8',
        '1506794778202-cad84cf45f1d',
        '1552374196-c4e7ffc6e126',
        '1520971347561-6ae677c76112',
        '1516893845159-17a6dd204d1d',
        '1520974735194-6b0b73b9e1e8',
        '1503342217505-b0a15cf70469',
        '1544006659-1b3fdfc16c34',
      ][i] }?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
  }));

  return (
    <section ref={ref} className="relative bg-black py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-white/90 text-2xl tracking-tight">Artists, makers, people.</h2>
          <div className="h-px flex-1 mx-6 bg-white/10" />
          <p className="text-white/50 text-sm max-w-sm">Work transforming into community. One becomes many as stories unfold.</p>
        </div>

        <motion.div
          style={{ opacity: reveal }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-lg bg-white/5"
            >
              <img
                src={item.src}
                alt="Artist"
                className="w-full h-48 sm:h-56 md:h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ArtistsGrid;
