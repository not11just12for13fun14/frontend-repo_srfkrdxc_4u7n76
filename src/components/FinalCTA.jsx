import { motion } from 'framer-motion';

function FinalCTA() {
  return (
    <section id="waitlist" className="bg-black py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl sm:text-4xl tracking-tight mb-8"
        >
          Join Waitlist
        </motion.h3>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="your@email"
            className="w-full sm:w-80 px-4 py-3 rounded-full bg-transparent border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
          >
            Join
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default FinalCTA;
