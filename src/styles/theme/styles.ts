import { StyleProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
};
