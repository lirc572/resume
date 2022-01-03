import React from 'react';

import pdf from '@react-pdf/renderer';

const { Link, Text, View, StyleSheet } = pdf;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Li Ruochen</Text>
      <Text style={styles.subtitle}>Third Year Undergraduate @ NUS</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href="https://github.com/lirc572" style={styles.link}>
        GitHub: lirc572
      </Link>
      <Link href="https://www.linkedin.com/in/lirc572" style={styles.link}>
        LinkedIn: lirc572
      </Link>
      <Link href="https://lirc572.com" style={styles.link}>
        Website: lirc572.com
      </Link>
      <Link href="mailto:liruochen@u.nus.edu" style={styles.link}>
        Email: liruochen@u.nus.edu
      </Link>
    </View>
  </View>
);
