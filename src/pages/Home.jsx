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
      backgroundImage: 'linear-gradient(to right, #a78bfa, #f472b6, #f87171)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
        Built with <a style={linkStyle} href="https://reactjs.org/">React</a>, <a style={linkStyle} href="https://vitejs.dev/">Vite</a>, and <a style={linkStyle} href="https://react-pdf.org/">React-pdf</a>.
      </div>
    </div>
  );
}
