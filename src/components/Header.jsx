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
      <Text style={styles.name}>Luke Skywalker</Text>
      <Text style={styles.subtitle}>Jedi Master</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href="https://lukeskywalker.com" style={styles.link}>
        Website: lukeskywalker.com
      </Link>
      <Link href="mailto:luke@theforce.com" style={styles.link}>
        Email: luke@theforce.com
      </Link>
      <Link href="https://www.linkedin.com/in/lukeskywalker/" style={styles.link}>
        LinkedIn: lukeskywalker
      </Link>
      <Link href="https://github.com/lukeskywalker/" style={styles.link}>
        GitHub: lukeskywalker
      </Link>
    </View>
  </View>
);
