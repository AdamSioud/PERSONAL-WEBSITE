import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#1E1E1E',
                color: 'white',
                padding: '0 4rem',
            },
            a: {
                color: '#B22222',
                textDecoration: 'none',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        },
    },
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Roboto, sans-serif',
    },
    colors: {
        neonBlue: {
            500: '#2272FF',
        },
        black: {
            500: '#1D1D1D',
        },
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'md',
            },
            variants: {
                solid: {
                    bg: 'neonBlue.500',
                    _hover: {
                        bg: 'neonBlue.600',
                    },
                },
                outline: {
                    borderColor: 'white',
                    color: 'white',
                    _hover: {
                        bg: 'rgba(255, 255, 255, 0.16)',
                    },
                },
            },
        },
    },
});

export default theme;
