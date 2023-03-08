import { Box, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box w='100%' h='20' bg='blue.600' p='4' position='relative'>
      <Box position='absolute' left='10'>
        <Link to='/main'>
          <Text fontSize='32px' color='white'>
            Home
          </Text>
        </Link>
      </Box>
      <Box position='absolute' right='90'>
        <Link to='/reservations'>
          <Button variant='solid' colorScheme='green'>
            장바구니
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
