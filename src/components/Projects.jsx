/* eslint-disable react/no-array-index-key */

import React from 'react';
import pdf from '@react-pdf/renderer';

const { Link, Text, View, StyleSheet } = pdf;

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

const ExperienceEntry = ({ company, link, details, date }) => {
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Link href={link} style={styles.company}>{company}</Link>
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

const projectData = [
  {
    company: 'OmniShoes',
    link: 'https://github.com/OmniShoes',
    date: 'Oct 2021 - Nov 2021',
    details: [
      'A smart shoes system that uses machine learning for activity detection and tracking',
      'Tech stack: Docker, Spring Framework, MySQL, Tensorflow, React, CC2650',
      'I developed the LSTM based model for activity detection, a distributed machine learning system for the application, and a PWA for data collection from CC2650 sensor tag on the shoes',
    ],
  },
  {
    company: 'SPA Evaluator',
    link: 'https://xn--qck0d2a9as9305fp4vawl8a6kza.ml',
    date: 'Dec 2021',
    details: [
      'A full-stack application that evaluates queries about a code snippet using a static program analyzer, with OCR support',
      'Developed with Deno, Nano JSX and Tesseract.js, deployed as a single Docker container on Heroku',
    ],
  },
  {
    company: 'Homital',
    link: 'https://github.com/Homital',
    date: 'May 2020 - Aug 2020',
    details: [
      'A smart home system where users control smart appliances from a mobile app',
      'Tech stack: Node.js, Express, MongoDB, Vue.js, ESP8266',
      'I developed the hardware, backend, as well as part of the frontend',
    ],
  },
  {
    company: 'NECPU',
    link: 'https://github.com/lirc572/NECPU',
    date: 'Mar 2020 - Apr 2020',
    details: [
      'A 32-bit CPU written in Verilog, with assembler and disassembler',
      'Developed as an FPGA soft core for a game written in Assembly',
    ],
  },
];

const Projects = () => (
  <View style={styles.container}>
    <Title>Projects</Title>
    {projectData.map(({ company, link, date, details }) => (
      <ExperienceEntry
        company={company}
        link={link}
        date={date}
        details={details}
        key={company}
      />
    ))}
  </View>
);

export default Projects;
