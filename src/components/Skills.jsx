import React from 'react';
import pdf from '@react-pdf/renderer';
import Title from './Title';
import List, { Item } from './List';
import { StylesContext } from '../styles';

const { Text, View, StyleSheet } = pdf;

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
      'Docker, Linux, Git, CMake',
      'GitHub Actions, Travis CI, CircleCI, Drone.io',
      'TensorFlow, Keras, Scikit-learn, Pandas, NumPy',
      'FPGA, ESP32, LVGL',
    ],
  },
];

const SkillEntry = ({ name, skills }) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    title: {
      ...globalStyles.title3,
      '@media min-width: 800': {
        marginBottom: 4,
      },
    },
    container: {
      ...globalStyles.entryContainer,
      '@media min-width: 800': {
        marginBottom: 0,
      },
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <List>
        {skills.map((skill, i) => (
          <Item key={i}>{skill}</Item>
        ))}
      </List>
    </View>
  );
}

const Skills = () => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 2,
      '@media min-width: 800': {
        marginBottom: 0,
      },
    },
  });

  return (
    <View style={styles.container}>
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
}

export default Skills;
