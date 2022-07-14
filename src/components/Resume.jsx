import React from 'react';
import pdf from '@react-pdf/renderer';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

const {
  Font,
  Page,
  View,
  StyleSheet,
} = pdf;

Font.register({
  family: 'Open-Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato-Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato-Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

export default props => {

  const styles = StyleSheet.create({
    page: {
      paddingTop: 20,
      paddingRight: 20,
      paddingLeft: 20,
      '@media min-width: 800': {
        paddingTop: 10,
      },
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 10,
      '@media max-width: 400': {
        flexDirection: 'column',
      },
    },
    leftColumn: {
      flexDirection: 'column',
      width: 200,
      paddingRight: 10,
      '@media max-width: 400': {
        width: '100%',
        paddingRight: 0,
      },
    },
    rightColumn: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: 'column',
    },
  });

  return (
    <Page {...props} style={styles.page}>
      <Header />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Education />
          <Skills />
        </View>
        <View style={styles.rightColumn}>
          <Experience />
          <Projects />
        </View>
      </View>
    </Page>
  );
}
