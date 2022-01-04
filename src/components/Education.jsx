import React from 'react';
import pdf from '@react-pdf/renderer';

const { Text, View, StyleSheet } = pdf;

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
  },
  degree: {
    fontFamily: 'Lato',
    fontSize: 11,
  },
  candidate: {
    fontFamily: 'Lato Italic',
    fontSize: 11,
  },
});

export default () => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>National University of Singapore (NUS)</Text>
    <Text style={styles.degree}>BComp (Computer Science)</Text>
    <Text style={styles.candidate}>2019-Present</Text>
  </View>
);
