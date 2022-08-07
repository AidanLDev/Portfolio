import { Box, Text, HStack } from '@chakra-ui/react';
import NavLink from './NavLink';
import React from 'react';
import styles from './styles.module.scss';

const navItems = [
  { label: 'Portfolio', link: '/' },
  { label: 'Blogs', link: '/posts/' },
];

export default function Navbar() {
  return (
    <Box className={styles.navContainer}>
      <Box display='flex'>
        <Text flexGrow={1}>Logo here</Text>
        <HStack spacing={6} p='4px 24px 0 0'>
          {navItems.map((item, i) => {
            return <NavLink key={`${item}__${i}`} item={item} />;
          })}
        </HStack>
      </Box>
    </Box>
  );
}
