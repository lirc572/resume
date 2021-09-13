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
        author="Luke Skywalker"
        keywords="awesome, resume, start wars"
        subject="The resume of Luke Skywalker"
        title="Resume"
      >
        <Resume size="A4" />
      </Document>
    </PDFViewer>
  </div>
);
