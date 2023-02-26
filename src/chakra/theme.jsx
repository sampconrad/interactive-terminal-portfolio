import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },
  {
    colors: {
      red: '#F5544D',
      yellow: '#FABD2F',
      green: '#47D043',
      orange: '#ff7300',
      lightBlue: '#66C2CD',
      darkBlue: '#6A77D2',
      brightYellow: '#F7FCA0',
      neonPink: '#ff4df6',
      neonGreen: '#00ff22',
      brand: {
        100: '#e4e9ec',
        200: '#cbd6dd',
        300: '#b2bec5',
        400: '#aaaaaa',
        500: '#808080',
        600: '#393a59',
        700: '#424040',
        725: '#3e4252',
        750: '#363947',
        800: '#282a35',
      },
    },
    fonts: {
      body: `'Fira Code'`,
    },
    styles: {
      global: () => ({
        body: {
          mt: '10%',
          bg: '#393a59',
          color: '#fff',
        },
      }),
    },
  }
);

export default theme;
