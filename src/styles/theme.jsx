import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
    fonts: {
        heading: `'Inter Variable', sans-serif`,
        body: `'Inter Variable', sans-serif`,
    },
    colors: {
        primary: "#73E2A7",
        secondary: "#011936",
        tertiary: "",
        quartenary: "#f1faee",
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
        disableTransitionOnChange: false,
    },
    styles: {
        global: (props) => ({
            "*": {
                padding: "0",
                margin: "0",
                boxSizing: 'border-box',
            },
            "html, body": {
                fontFamily: `'Inter Variable', sans-serif`,
                backgroundColor: "#f1faee",
                fontSize: "14px",
                
            },
        }),
    },
});import { body } from "framer-motion/client";
