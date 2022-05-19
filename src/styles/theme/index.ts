import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { styles } from './styles';

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  colors,
  styles,
  components: {},
});
