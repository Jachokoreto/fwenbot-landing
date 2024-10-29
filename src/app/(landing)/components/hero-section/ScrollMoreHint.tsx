import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion } from 'framer-motion'


export const ScrollMoreHint = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, yoyo: Infinity }}
            style={{
                position: 'absolute',
                bottom: '20px',
                width: '100%',
                textAlign: 'center',
                fontSize: '16px',
                color: '#333'
            }}
        >
            Scroll Down
            <motion.div
                animate={{ y: 10 }}
                transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                style={{ marginTop: '5px', fontSize: '24px' }}
            >
                ↓
            </motion.div>
        </motion.div>
    );
}
