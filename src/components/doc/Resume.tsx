import React from "react";
import pdf from "@react-pdf/renderer";
import Header from "./Header";
import Skills from "./section/Skills";
import Certs from "./section/Certs";
import Education from "./section/Education";
import Experience from "./section/Experience";
import Volunteering from "./section/Volunteering";
import Projects from "./section/Projects";
import { JSX } from "react/jsx-runtime";

const { Font, Page, View, StyleSheet } = pdf;

Font.register({
  family: "Open-Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato-Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato-Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

export default function Component(
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<pdf.Page> &
    Readonly<React.PropsWithChildren<pdf.PageProps>>
) {
  const styles = StyleSheet.create({
    page: {
      paddingTop: 4,
      paddingRight: 20,
      paddingLeft: 20,
      "@media min-width: 800": {
        paddingTop: 0,
      },
    },
    container: {
      flex: 1,
      flexDirection: "row",
      paddingTop: 6,
      "@media min-width: 800": {
        paddingTop: 4,
      },
    },
    leftColumn: {
      flexDirection: "column",
      width: "180",
      paddingRight: 2,
      "@media min-width: 800": {
        width: 280,
      },
    },
    rightColumn: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: "column",
    },
  });

  return (
    <Page {...props} style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Education />
          <Skills />
          <Certs />
        </View>
        <View style={styles.rightColumn}>
          <Experience />
          <Volunteering />
          <Projects />
        </View>
      </View>
    </Page>
  );
}
