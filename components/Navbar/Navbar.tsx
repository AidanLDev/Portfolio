import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import NavLink from './NavLink'
import styles from './styles.module.scss'
import { NavBarProps, NavItem } from '../../interfaces/navbarInterfaces'

const navItems: NavItem[] = [
  { label: 'Blogs', link: 'https://blog.aidanlowson.com' },
]

export default function Navbar({ active }: Readonly<NavBarProps>) {
  return (
    <Box className={styles.navContainer} id="nav-bar">
      <Box display="flex">
        <Box flexGrow={1}>
          <Link passHref href="/">
            <Text className={styles.logo}>AL</Text>
          </Link>
        </Box>
        <HStack gap={6} p="4px 24px 0 0">
          {navItems.map((item, i) => {
            return <NavLink key={`${item.label}__${i}`} item={item} active={active} />
          })}
        </HStack>
      </Box>
    </Box>
  )
}
