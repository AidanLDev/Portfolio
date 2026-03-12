import { MotionProps } from 'motion/react'
import type { StaticImageData } from 'next/image'
import React from 'react'

export type MotionImageProps = React.ImgHTMLAttributes<HTMLImageElement> & MotionProps
export type SvgType = StaticImageData
