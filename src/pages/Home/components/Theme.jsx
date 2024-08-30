import { useState, useEffect } from 'react';
import { RxMoon, RxSun } from 'react-icons/rx';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Save theme to cookies
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Apply the theme on initial render
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <span className="mood" onClick={toggleTheme}>
      {theme === 'light' ? <RxMoon /> : <RxSun />}
    </span>
  );
};
