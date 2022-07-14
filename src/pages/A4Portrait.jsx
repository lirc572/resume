import React from 'react';
import pdf from '@react-pdf/renderer';
import Resume from '../components/Resume';
import { StylesContext, styles } from '../styles';

const { PDFViewer, Document } = pdf;

export default () => (
  <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }}>
    <PDFViewer style={{ flex: 1 }}>
      <Document
        author="Li Ruochen"
        keywords="lirc572, resume"
        subject="The resume of Li Ruochen"
        title="Resume"
      >
        <StylesContext.Provider value={styles}>
          <Resume size="A4" />
        </StylesContext.Provider>
      </Document>
    </PDFViewer>
  </div>
);
