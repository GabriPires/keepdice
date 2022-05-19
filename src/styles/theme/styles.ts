import { StyleProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleProps) => ({
    body: {
      color: mode('dark.500', 'whiteAlpha.900')(props),
      bg: mode('white', 'dark.500')(props),
      lineHeight: 'base',
    },
  }),
};
