import { useTransform, MotionValue } from 'framer-motion'

export const transform = (
    mationValue: MotionValue<number>,
    val1: any[],
    val2: any[]
) => {
    return useTransform(mationValue, val1, val2)
}