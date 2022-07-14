import React from 'react';
import pdf from '@react-pdf/renderer';
import { StylesContext } from '../styles';

const { Text, View, StyleSheet } = pdf;

import Title from './Title';

export default () => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    container: {
      ...globalStyles.sectionContainer,
    },
    school: {
      ...globalStyles.title3,
    },
    candidate: {
      ...globalStyles.dateText,
      fontFamily: 'Lato-Italic',
    },
    degree: {
      ...globalStyles.bodyText,
    },
  });

  return (
    <View style={styles.container}>
      <Title>Education</Title>
      <Text style={styles.school}>National University of Singapore (NUS)</Text>
      <Text style={styles.candidate}>2019-2023</Text>
      <Text style={styles.degree}>BComp (Computer Science)</Text>
    </View>
  );
}
