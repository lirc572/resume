import React from 'react';
import { Link, useHistory } from "react-router-dom";

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
        <h1>Resume</h1>
      </div>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '8rem',
      }}>
        <div className="link-div" onClick={() => history.push("/portrait")}>
          <span to="/portrait">A4 Portrait</span>
        </div>
        <div className="link-div" onClick={() => history.push("/landscape")}>
          <span>A4 Landscape</span>
        </div>
      </div>
    </div>
  );
}
