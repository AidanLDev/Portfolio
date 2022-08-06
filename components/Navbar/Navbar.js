import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <Box height='40px' width='100%' borderBottom='1px solid blue'>
      <Box display='flex'>
        <Text flexGrow={1}>Logo here</Text>
        <Link href='/posts/' passHref>
          <Text color='white'>
            <a>Blogs</a>
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
