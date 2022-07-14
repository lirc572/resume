import React from 'react';
import pdf from '@react-pdf/renderer';
import { StylesContext } from '../styles';

const { Text, StyleSheet } = pdf;

const Title = ({ children }) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    title: {
      ...globalStyles.title2,
    },
  });

  return (
    <Text style={styles.title}>{children}</Text>
  );
}

export default Title;
