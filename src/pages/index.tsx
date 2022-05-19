import { Flex, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex
      h={'calc(100vh - 4rem)'}
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
