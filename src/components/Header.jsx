import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="font-medium tracking-tight text-white select-none">
          <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 align-middle" />
          ReConnect
        </div>
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </motion.header>
  );
}

export default Header;
