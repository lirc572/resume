/* eslint-disable react/no-array-index-key */

import React from 'react';
import pdf from '@react-pdf/renderer';
import Title from './Title';
import List, { Item } from './List';
import { StylesContext } from '../styles';

const { Link, Text, View, StyleSheet } = pdf;

const projectData = [
  {
    project: 'OmniShoes',
    link: 'https://github.com/OmniShoes',
    date: 'Oct 2021 - Nov 2021',
    details: [
      'A smart shoes system that uses machine learning for activity detection and tracking',
      'Tech stack: Docker, Spring Framework, MySQL, Tensorflow, React, CC2650',
      'I developed the LSTM based model for activity detection, a distributed machine learning system for the application, and a PWA for data collection from CC2650 sensor tag on the shoes',
    ],
  },
  {
    project: 'SPA Evaluator',
    link: 'https://xn--qck0d2a9as9305fp4vawl8a6kza.ml',
    date: 'Dec 2021',
    details: [
      'A full-stack application that evaluates queries about a code snippet using a static program analyzer, with OCR support',
      'Developed with Deno, Nano JSX and Tesseract.js, deployed as a single Docker container on Heroku',
    ],
  },
  {
    project: 'Homital',
    link: 'https://github.com/Homital',
    date: 'May 2020 - Aug 2020',
    details: [
      'A smart home system where users control smart appliances from a mobile app',
      'Tech stack: Node.js, Express, MongoDB, Vue.js, ESP8266',
      'I developed the hardware, backend, as well as part of the frontend',
    ],
  },
  {
    project: 'Covid-Polygraph',
    link: 'https://github.com/Team2333',
    date: 'Jan 2022 - Jan 2022',
    details: [
      'A Covid-19 fact checking tool built on top of BERT and transformers-interpret',
      'I worked on the NLP model, the frontend, as well as a CI/CD pipeline for the backend',
    ],
  },
];

const ExperienceEntry = ({ project, link, details, date }) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    container: {
      ...globalStyles.entryContainer,
      '@media min-width: 800': {
        marginBottom: 4,
      },
    },
    headerContainer: {
      flexDirection: 'row',
      marginBottom: 6,
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
    project: {
      ...globalStyles.title3,
      marginBottom: 0,
      color: 'black',
      textDecoration: 'none',
    },
    date: {
      ...globalStyles.dateText,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Link href={link} style={styles.project}>{project}</Link>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map((detail, i) => (
          <Item key={i}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Projects = () => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 4,
      flex: 1,
      '@media max-width: 400': {
        paddingTop: 10,
        paddingLeft: 0,
      },
    },
  });

  return (
    <View style={styles.container}>
      <Title>Projects</Title>
      {projectData.map(({ project, link, date, details }) => (
        <ExperienceEntry
          project={project}
          link={link}
          date={date}
          details={details}
          key={project}
        />
      ))}
    </View>
  );
}

export default Projects;
