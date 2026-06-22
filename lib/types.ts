import type { MotionProps } from 'motion/react'
import type { StaticImageData } from 'next/image'
import type { ImgHTMLAttributes } from 'react'

export type MotionImageProps = ImgHTMLAttributes<HTMLImageElement> & MotionProps
export type SvgType = StaticImageData
