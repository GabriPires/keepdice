import { Button, Text } from '@chakra-ui/react';
import { UserCirclePlus } from 'phosphor-react';

export const AddDataSheet = () => {
  return (
    <Button
      display={'flex'}
      flexDir={'column'}
      gap={4}
      h={'unset'}
      p={4}
      bg={'purple.800'}
      w={'fit-content'}
      rounded={8}
      _hover={{
        bg: 'purple.900',
      }}
    >
      <UserCirclePlus size={32} />
      <Text>Nova ficha</Text>
    </Button>
  );
};
