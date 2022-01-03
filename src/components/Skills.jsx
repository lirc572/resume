/* eslint-disable react/no-array-index-key */

import React from 'react';
import pdf from '@react-pdf/renderer';

const { Text, View, StyleSheet } = pdf;

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View>
    <Title>Skills</Title>
    <SkillEntry
      name="Programming Languages"
      skills={[
        'JavaScript/TypeScript, Python, C/C++, Golang, Java, PHP, Lua',
      ]}
    />
    <SkillEntry
      name="Frontend"
      skills={[
        'HTML, CSS, jQuery, React, Vue, Svelte',
        'Tailwind CSS, D3.js, GraphQL',
      ]}
    />
    <SkillEntry
      name="Backend"
      skills={[
        'Node.js, Deno, Flask, Django, WordPress',
        'MySQL, MongoDB, CouchDB',
        'Nginx, Apache, Caddy',
      ]}
    />
    <SkillEntry
      name="Others"
      skills={[
        'Docker, Nginx, Linux, Git, CMake',
        'GitHub Actions, Travis CI, CircleCI, Drone.io',
        'TensorFlow, Keras, Scikit-learn, Pandas, NumPy',
        'FPGA, ESP32, LVGL',
      ]}
    />
  </View>
);

export default Skills;
