import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

function Root() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Outlet context={{ theme }} />
    </>
  );
}

export default Root;
