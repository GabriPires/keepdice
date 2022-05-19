import { Button, Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const Header = () => {
  const { push } = useRouter();

  return (
    <Flex
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={{ base: 4, md: 24 }}
      bg={'purple.800'}
    >
      <Heading cursor={'pointer'} onClick={() => push('/')}>
        KeepDice
      </Heading>
      <Button onClick={() => push('/signup')}>Entrar</Button>
    </Flex>
  );
};
