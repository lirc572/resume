import React from 'react';
import pdf from '@react-pdf/renderer';

const { Text, View, StyleSheet } = pdf;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 11,
  },
  itemContent: {
    flex: 1,
    fontSize: 11,
    fontFamily: 'Lato',
  },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
