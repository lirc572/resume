import React from "react";
import type { Styles } from "@react-pdf/renderer";

export const styles: Styles = {
  title1: {
    fontSize: 18,
    fontFamily: "Lato-Bold",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Lato",
    marginBottom: 6,
  },
  title2: {
    fontSize: 14,
    fontFamily: "Lato-Bold",
    textTransform: "uppercase",
    marginBottom: 6,
    // @ts-expect-error: media query not defined in Style
    "@media orientation: landscape": {
      marginBottom: 0,
    },
  },
  title3: {
    fontSize: 12,
    fontFamily: "Lato-Bold",
    marginBottom: 6,
    // @ts-expect-error: media query not defined in Style
    "@media orientation: landscape": {
      marginBottom: 0,
    },
  },
  dateText: {
    fontSize: 11,
    fontFamily: "Lato-Italic",
    // @ts-expect-error: media query not defined in Style
    "@media orientation: landscape": {
      fontSize: 10,
    },
  },
  bodyText: {
    fontSize: 11,
    fontFamily: "Lato",
    // @ts-expect-error: media query not defined in Style
    "@media orientation: landscape": {
      fontSize: 10,
    },
  },
  sectionContainer: {
    marginBottom: 10,
    // @ts-expect-error: media query not defined in Style
    "@media orientation: landscape": {
      marginBottom: 4,
    },
  },
  entryContainer: {
    marginBottom: 6,
  },
};

export const StylesContext = React.createContext(
  styles,
);
