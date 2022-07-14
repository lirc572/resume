import React from 'react';
import pdf from '@react-pdf/renderer';
import Title from './Title';
import List, { Item } from './List';
import { StylesContext } from '../styles';

const { Link, Text, View, StyleSheet } = pdf;

const experienceData = [
  {
    company: 'Bridges For Enterprise',
    link: 'https://www.bridgesforenterprise.com',
    position: 'Global Software Development Manager',
    date: 'Nov 2020 - Present',
    details: [
      'Previously worked as a project lead for web development projects using the React Django Stack',
      'Currently responsible for the overall development life cycle of internal projects, providing technical support, and managing the global software development team',
    ],
  },
  {
    company: 'Huawei Technologies',
    link: 'https://e.huawei.com/sg/',
    position: 'Trust Modelling Research Intern',
    date: 'May 2022 - Present',
    details: [
      'Implementation of cryptographic algorithms for cellular network',
      'Simulation of trust based network',
    ],
  },
  {
    company: 'Temasek Laboratories @ NUS',
    link: 'https://temasek-labs.nus.edu.sg',
    position: 'Student Researcher',
    date: 'Feb 2021 - May 2022',
    details: [
      'Conducted fault tolerant control (FTC) related research, software development and hardware testing on UAV platforms',
      'Created deep-learning models for digital twins of UAV systems',
    ],
  },
];

const ExperienceEntry = ({ company, link, details, position, date }) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    container: {
      ...globalStyles.entryContainer,
      '@media min-width: 800': {
        marginBottom: 4,
      },
    },
    headerContainer: {
      flexDirection: 'column',
      marginBottom: 6,
      '@media min-width: 800': {
        flexDirection: 'row',
        marginBottom: 4,
      },
    },
    leftColumn: {
      flexDirection: 'row',
      flexGrow: 9,
    },
    rightColumn: {
      flexDirection: 'column',
      flexGrow: 1,
      alignItems: 'flex-end',
      justifySelf: 'flex-end',
    },
    position: {
      ...globalStyles.title3,
      marginBottom: 0,
    },
    company: {
      ...globalStyles.title3,
      marginBottom: 0,
      fontFamily: 'Lato-Italic',
      color: 'black',
      textDecoration: 'none',
    },
    positionCompanySeparator: {
      ...globalStyles.title3,
      marginBottom: 0,
      marginLeft: 2,
      marginRight: 2,
    },
    date: {
      ...globalStyles.dateText,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.position}>{position}</Text>
          <Text style={styles.positionCompanySeparator}>@</Text>
          <Link href={link} style={styles.company}>{company}</Link>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View>
        <List>
          {details.map((detail, i) => (
            <Item key={i}>
              {detail}
            </Item>
          ))}
        </List>
      </View>
    </View >
  );
};

const Experience = () => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 4,
      '@media max-width: 400': {
        paddingTop: 10,
        paddingLeft: 0,
      },
    },
  });

  return (
    <View style={styles.container}>
      <Title>Experience</Title>
      {experienceData.map(({ company, link, date, details, position }) => (
        <ExperienceEntry
          company={company}
          link={link}
          date={date}
          details={details}
          key={company + position}
          position={position}
        />
      ))}
    </View>
  );
}

export default Experience;
