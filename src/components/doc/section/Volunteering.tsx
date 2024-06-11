import React from "react";
import pdf from "@react-pdf/renderer";
import Title from "../common/Title";
import List, { Item } from "../common/List";
import { StylesContext } from "../../../styles";

const { Link, Text, View, StyleSheet } = pdf;

const volunteeringData = [
  {
    company: "BfE",
    link: "https://www.bridgesforenterprise.com",
    position: "Global Software Development Manager",
    date: "Nov 2020 - Present",
    details: [
      "Responsible for the overall development life cycle of internal projects, providing technical support, code review, and managing the global software development team",
      "Previously worked as a project lead for web development projects using React/Django Stack and WordPress",
    ],
  },
];

const VolunteeringEntry = ({
  company,
  link,
  details,
  position,
  date,
}: {
  company: string;
  link: string;
  details: string[];
  position: string;
  date: string;
}) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    container: {
      ...globalStyles.entryContainer,
      "@media orientation: landscape": {
        marginBottom: 4,
      },
    },
    headerContainer: {
      flexDirection: "row",
      marginBottom: 6,
      "@media orientation: landscape": {
        flexDirection: "row",
        marginBottom: 4,
      },
    },
    leftColumn: {
      flexDirection: "row",
      flexGrow: 9,
    },
    rightColumn: {
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "flex-end",
      justifySelf: "flex-end",
    },
    position: {
      ...globalStyles.title3,
      marginBottom: 0,
    },
    company: {
      ...globalStyles.title3,
      marginBottom: 0,
      fontFamily: "Lato-Italic",
      color: "black",
      textDecoration: "none",
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
          <Link href={link} style={styles.company}>
            {company}
          </Link>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View>
        <List>
          {details.map((detail, i) => (
            <Item key={i}>{detail}</Item>
          ))}
        </List>
      </View>
    </View>
  );
};

const Volunteering = () => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 0,
    },
  });

  return (
    <View style={styles.container}>
      <Title>Volunteering</Title>
      {volunteeringData.map(({ company, link, date, details, position }) => (
        <VolunteeringEntry
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
};

export default Volunteering;
