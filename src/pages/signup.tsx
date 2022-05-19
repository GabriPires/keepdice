import type { NextPage } from 'next';
import { chakra, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { GoogleLogo } from 'phosphor-react';

const SignUp: NextPage = () => {
  return (
    <chakra.section
      h={'calc(100vh - 4rem)'}
      display={'flex'}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent={'center'}
    >
      <Flex
        flexDir={'column'}
        p={{ base: 8, md: 8 }}
        mt={{ base: 12, md: 0 }}
        maxW={{ base: 'sm', md: 'md' }}
        w={'fit-content'}
        bg={'purple.600'}
        rounded={8}
      >
        <Heading>Criar uma conta</Heading>
        <Text maxW={{ base: '20rem', md: '24rem' }}>
          Crie uma conta ou acesse a sua para ter acesso a todos as
          funcionalidades do <strong>KeepDice</strong>
        </Text>
        <IconButton
          aria-label={'Entrar com conta do Google'}
          title={'Entrar com conta do Google'}
          icon={<GoogleLogo size={32} />}
          alignSelf={'center'}
          w={'fit-content'}
          boxSize={12}
          rounded={50}
          mt={8}
        />
      </Flex>
    </chakra.section>
  );
};

export default SignUp;
