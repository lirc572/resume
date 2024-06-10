import React from "react";
import pdf from "@react-pdf/renderer";
import Title from "../common/Title";
import List, { Item } from "../common/List";
import { StylesContext } from "../../../styles";

const { Text, View, StyleSheet } = pdf;

const skillData = [
  {
    name: "Programming Languages",
    skills: ["JavaScript/TypeScript, Python, C/C++, Java, PHP"],
  },
  {
    name: "Frontend",
    skills: [
      "HTML, CSS, jQuery, Svelte, React, Vue",
      "Tailwind CSS, D3.js, GraphQL",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js, Deno, Flask, Django",
      "MySQL, MongoDB, Redis",
      "Nginx, Apache, Caddy",
    ],
  },
  {
    name: "Others",
    skills: [
      "Docker, Kubernetes, Linux, Git",
      "CMake, Crypto++, OpenSSL, GitHub Actions",
      "TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy",
      "FPGA, ESP32, Nvidia Jetson",
      "BGP, RPKI, BGPsec, IPv4, IPv6",
    ],
  },
];

const SkillEntry = ({ name, skills }: { name: string; skills: string[] }) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    title: {
      ...globalStyles.title3,
      "@media orientation: landscape": {
        marginBottom: 4,
      },
    },
    container: {
      ...globalStyles.entryContainer,
      "@media orientation: landscape": {
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
};

const Skills = () => {
  const globalStyles = React.useContext(StylesContext);
  const styles = StyleSheet.create({
    container: {
      ...globalStyles.sectionContainer,
    },
  });

  return (
    <View style={styles.container}>
      <Title>Skills</Title>
      {skillData.map(({ name, skills }) => (
        <SkillEntry name={name} skills={skills} key={name} />
      ))}
    </View>
  );
};

export default Skills;
