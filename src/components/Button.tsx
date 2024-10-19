'use client'
import React, { CSSProperties } from 'react'
import { motion, Variants } from 'framer-motion'
import { init } from 'next/dist/compiled/webpack/webpack'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    primary?: boolean
    disabled?: boolean
    style?: CSSProperties
    variant?: Variants
}

const Button: React.FC<ButtonProps> = ({
    text,
    primary = false,
    disabled = false,
    style,
    className,
    variant,
}) => {
    const baseClasses =
        'gap-2.5  px-8 py-2 my-auto text-center rounded-2xl border-2 border-black border-solid capitalize font-medium'
    const primaryClasses =
        'text-black bg-yellow-400 shadow-[4px_4px_0px_rgba(0,0,0,1)]'
    const secondaryClasses = 'bg-cyan-200 shadow-[4px_4px_0px_rgba(0,0,0,1)]'

    return (
        <motion.button
            variants={variant}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            className={`${baseClasses} ${
                primary ? primaryClasses : secondaryClasses
            } ${className}`}
            style={style}
        >
            {text}
        </motion.button>
    )
}

export default Button
