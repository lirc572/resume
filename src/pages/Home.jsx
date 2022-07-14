import React from 'react';
import { useHistory } from "react-router-dom";

const linkStyle = {
  marginLeft: '0.25rem',
  color: '#595954',
};

export default () => {
  const history = useHistory();

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      background: '#43c6ac',
      backgroundImage: 'linear-gradient(to right, #43c6ac, #f8ffae)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#254833',
      }}>
        <h1>Ruochen's Resume</h1>
      </div>
      <div style={{
        marginTop: '2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <div className="link-div" onClick={() => history.push("/portrait")}>
          <span>A4 Portrait</span>
        </div>
        <div className="link-div" onClick={() => history.push("/landscape")}>
          <span>A4 Landscape</span>
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
      }}>
        Built with <a style={linkStyle} href="https://reactjs.org/">React</a>, <a style={linkStyle} href="https://vitejs.dev/">Vite</a>, and <a style={linkStyle} href="https://react-pdf.org/">React-pdf</a>. View <a style={linkStyle} href="https://github.com/lirc572/resume">source</a>
      </div>
    </div>
  );
}
