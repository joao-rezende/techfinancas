import { motion } from 'framer-motion';

import '../styles/globals.css'
import '../styles/dimension/main.scss'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ default: { duration: .5 } }} variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp
