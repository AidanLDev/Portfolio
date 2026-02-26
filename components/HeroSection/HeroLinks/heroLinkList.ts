import type { SvgType } from '@/lib/types'
import emailIcon from '@/public/icons/emailIcon.svg'
import githubIcon from '@/public/icons/githubIcon.svg'
import linkedInIcon from '@/public/icons/linkedInIcon.svg'

interface IHeroLink {
  readonly link: string
  readonly icon: SvgType
}

export const heroLinkList: IHeroLink[] = [
  {
    link: 'https://github.com/AidanLDev',
    icon: githubIcon,
  },
  {
    link: 'https://www.linkedin.com/in/aidanlowson1/',
    icon: linkedInIcon,
  },
  {
    link: 'mailto:dev@aidanlowson.com',
    icon: emailIcon,
  },
]
