import { Button, Flex, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      h={16}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={{ base: 4, md: 24 }}
      bg={'purple.800'}
    >
      <Heading>KeepDice</Heading>
      <Button>Entrar</Button>
    </Flex>
  );
};
