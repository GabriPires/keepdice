import type { NextPage } from 'next';

import { Flex, Heading, Text } from '@chakra-ui/react';

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
      <Text fontSize={'xs'} mt={4}>
        Feito com ❤️ pelo{' '}
        <a
          href={'https://github.com/GabriPires'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          GabriPires
        </a>
      </Text>
    </Flex>
  );
};

export default Home;
