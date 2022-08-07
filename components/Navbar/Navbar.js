import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import NavLink from './NavLink';
import styles from './styles.module.scss';

const navItems = [{ label: 'Blogs', link: '/posts/' }];

export default function Navbar({ active }) {
  return (
    <Box className={styles.navContainer}>
      <Box display='flex'>
        <Box flexGrow={1}>
          <Link passHref href='/'>
            <Text className={styles.logo}>AL</Text>
          </Link>
        </Box>
        <HStack spacing={6} p='4px 24px 0 0'>
          {navItems.map((item, i) => {
            return (
              <NavLink key={`${item}__${i}`} item={item} active={active} />
            );
          })}
        </HStack>
      </Box>
    </Box>
  );
}
