import React from "react";
import pdf from "@react-pdf/renderer";
import Title from "../common/Title";
import List, { Item } from "../common/List";
import { StylesContext } from "../../../styles";

const { Text, View, StyleSheet } = pdf;

const certsData = [
  {
    year: "2018",
    certs: [
      {
        text: "Singapore NOI Bronze Medal",
        url: "https://noisg.comp.nus.edu.sg/noi/noiTwentyFirstResults.php",
      },
    ],
  },
  {
    year: "2020",
    certs: [
      {
        text: "NUS Orbital - Artemis (Extreme Level)",
        url: "https://credentials.nus.edu.sg/9ab3eedd-5ab6-46ad-bc4e-57a757edc262",
      },
    ],
  },
  {
    year: "2022",
    certs: [
      {
        text: "Carro x AWS Hackathon (Data Science) - 9th Place",
        url: "https://scholarship.carro.sg/hackathon/",
      },
    ],
  },
  {
    year: "2023",
    certs: [
      {
        text: "Huawei HCIA Cloud Service",
        url: "https://git.lirc572.com/lirc572/Certificates/raw/branch/master/010102601739809222211409.pdf",
      },
      {
        text: "Huawei ICT Competition Global Final Cloud Track - First Prize",
        url: "https://git.lirc572.com/lirc572/Certificates/raw/branch/master/ICT20230402193809235132123317.pdf",
      },
    ],
  },
];

const CertsYear = ({
  year,
  certs,
}: {
  year: string;
  certs: { text: string; url: string }[];
}) => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    title: {
      ...globalStyles.title3,
      "@media min-width: 800": {
        marginBottom: 4,
      },
    },
    container: {
      ...globalStyles.entryContainer,
      "@media min-width: 800": {
        marginBottom: 0,
      },
    },
    link: {
      ...globalStyles.bodyText,
      color: "black",
      textDecoration: "none",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{year}</Text>
      <List>
        {certs.map(({ text, url }, i) => (
          <Item key={i}>
            {url ? (
              <Text href={url} style={styles.link}>
                {text}
              </Text>
            ) : (
              <Text style={styles.link}>{text}</Text>
            )}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Certs = () => {
  const globalStyles = React.useContext(StylesContext);

  const styles = StyleSheet.create({
    container: {
      ...globalStyles.sectionContainer,
    },
  });

  return (
    <View style={styles.container}>
      <Title>Licenses & certifications</Title>
      {certsData.map(({ year, certs }) => (
        <CertsYear year={year} certs={certs} key={year} />
      ))}
    </View>
  );
};

export default Certs;
