/* eslint-disable react/no-array-index-key */

import React from 'react';
import pdf from '@react-pdf/renderer';

const { Link, Text, View, StyleSheet } = pdf;

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
    '@media min-width: 800': {
      marginBottom: 4,
    },
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    '@media min-width: 800': {
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
  company: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  position: {
    marginLeft: 2,
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

const ExperienceEntry = ({ company, link, details, position, date }) => {
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Link href={link} style={styles.company}>{company}</Link>
          <Text style={styles.position}>| {position}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const experienceData = [
  {
    company: 'Bridges For Enterprise',
    link: 'https://www.bridgesforenterprise.com',
    position: 'Technology Associate',
    date: 'Nov 2020 - Present',
    details: [
      'Developed BfE Directory, an interactive org-chart to visualize the structure of BfE',
      'Led a team to develop a startup-mentor matching platform for BfE operations managers',
    ],
  },
  {
    company: 'Temasek Laboratories @ NUS',
    position: 'Student Researcher',
    date: 'Feb 2021 - Present',
    details: [
      'Conducted fault tolerant control related research on UAV platforms',
      'Created an ML model for the motor propeller system',
    ],
  },
];

const Experience = () => (
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

export default Experience;
