import React from 'react';
import pdf from '@react-pdf/renderer';
import Resume from '../components/Resume';

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
        <Resume size="A4" />
      </Document>
    </PDFViewer>
  </div>
);
