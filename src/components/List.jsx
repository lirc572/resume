import React from 'react';
import pdf from '@react-pdf/renderer';
import { StylesContext } from '../styles';

const { Text, View, StyleSheet } = pdf;

const List = ({ children }) => {
  return (
    <View>
      {children}
    </View>
  );
}

export const Item = ({ children }) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      marginBottom: 4,
    },
    bulletPoint: {
      ...globalStyles.bodyText,
      width: 10,
    },
    itemContent: {
      ...globalStyles.bodyText,
      flex: 1,
    },
  });

  return (
    <View style={styles.item}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.itemContent}>{children}</Text>
    </View>
  );
}

export default List;
