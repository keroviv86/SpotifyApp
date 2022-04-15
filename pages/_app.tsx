import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const MyApp=({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

// underscore _app means don't make a route for this. if there wasn't underscore next.js would make a
// route called _app and it will load that component
// entry to app


