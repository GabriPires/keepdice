import { StyleProps } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleProps) => ({
    ':root': {
      '--chakra-bg-header-menu': mode('purple.500', 'purple.500')(props),
    },
    html: {
      height: '-webkit-fill-available',
      '-webkit-font-smoothing': 'antialiased',
    },
    body: {
      color: mode('purple.900', 'whiteAlpha.900')(props),
      bg: mode('white', 'purple.900')(props),
      lineHeight: 'base',
    },
  }),
};
