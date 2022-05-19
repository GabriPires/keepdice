import { Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex
      h={'100vh'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading>KeepDice</Heading>
      <Text>Coming soon...</Text>
    </Flex>
  );
};

export default Home;
