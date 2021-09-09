import React from 'react';
import ReactDOM from 'react-dom';
import pdf from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';

const { PDFViewer } = pdf;

const App = () => (
  <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }}>
    <PDFViewer style={{ flex: 1 }}>
      <MyDocument />
    </PDFViewer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
