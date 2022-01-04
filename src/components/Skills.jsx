/* eslint-disable react/no-array-index-key */

import React from 'react';
import pdf from '@react-pdf/renderer';

const { Text, View, StyleSheet } = pdf;

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    '@media min-width: 800': {
      marginBottom: 4,
    },
  },
  entryContainer: {
    marginBottom: 10,
    '@media min-width: 800': {
      marginBottom: 0,
    },
  },
});

const SkillEntry = ({ name, skills }) => (
  <View style={styles.entryContainer}>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const skillData = [
  {
    name: 'Programming Languages',
    skills: [
      'JavaScript/TypeScript, Python, C/C++, Golang, Java, PHP, Lua',
    ],
  },
  {
    name: 'Frontend',
    skills: [
      'HTML, CSS, jQuery, React, Vue, Svelte',
      'Tailwind CSS, D3.js, GraphQL',
    ],
  },
  {
    name: 'Backend',
    skills: [
      'Node.js, Deno, Flask, Django, WordPress',
      'MySQL, MongoDB, CouchDB',
      'Nginx, Apache, Caddy',
    ],
  },
  {
    name: 'Others',
    skills: [
      'Docker, Nginx, Linux, Git, CMake',
      'GitHub Actions, Travis CI, CircleCI, Drone.io',
      'TensorFlow, Keras, Scikit-learn, Pandas, NumPy',
      'FPGA, ESP32, LVGL',
    ],
  },
];

const Skills = () => (
  <View>
    <Title>Skills</Title>
    {skillData.map(({ name, skills }) => (
      <SkillEntry
        name={name}
        skills={skills}
        key={name}
      />
    ))}
  </View>
);

export default Skills;
