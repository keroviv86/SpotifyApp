import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "reset-css";
// allows all browser to have the same css

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5f5f5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
  },
  componetns: {
    Button: {
      varients: {
        link: {
          ':focus': {
            outline: "none",
            boxShadow: "none",
          }
        }
      }
      // varients is the type of button 
    }
  }
})

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

// underscore _app means don't make a route for this. if there wasn't underscore next.js would make a
// route called _app and it will load that component
// entry to app


