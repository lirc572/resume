import React from 'react';
import pdf from '@react-pdf/renderer';
import { StylesContext } from '../styles';

const { Link, Text, View, StyleSheet } = pdf;

const linkData = [
  {
    text: 'GitHub: lirc572',
    url: 'https://github.com/lirc572',
  },
  {
    text: 'LinkedIn: lirc572',
    url: 'https://www.linkedin.com/in/lirc572/',
  },
  {
    text: 'Website: lirc572.com',
    url: 'https://lirc572.com',
  },
  {
    text: 'Email: liruochen@u.nus.edu',
    url: 'mailto:liruochen@u.nus.edu',
  },
];

export default () => {
  const globalStyles = React.useContext(StylesContext);

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
    },
    linkColumn: {
      flexDirection: 'column',
      flexGrow: 2,
      alignSelf: 'flex-end',
      justifySelf: 'flex-end',
      marginBottom: 2,
    },
    name: {
      ...globalStyles.title1,
      fontFamily: 'Courier-Bold',
    },
    subtitle: {
      ...globalStyles.subtitle,
      justifySelf: 'flex-end',
    },
    link: {
      ...globalStyles.bodyText,
      color: 'black',
      textDecoration: 'none',
      alignSelf: 'flex-end',
      justifySelf: 'flex-end',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>Li Ruochen</Text>
        <Text style={styles.subtitle}>Final Year Computer Science Undergraduate @ NUS</Text>
      </View>
      <View style={styles.linkColumn}>
        {
          linkData.map(({ text, url }) => (
            <Link href={url} style={styles.link}>
              {text}
            </Link>
          ))
        }
      </View>
    </View>
  );
}
