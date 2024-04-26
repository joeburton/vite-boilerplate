import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export default extendTheme({
  breakpoints,
  fonts: {
    body: "Helvetica Neue, Helvetica, Arial, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    slim: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
});
