import Hero from './components/Hero';
import About from './components/About';
import './index.css';
import FeaturedGames from './components/FeaturedGames';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

function App() {
  const { theme } = useTheme(); // Access theme from the context

  return (
    <div className={`hero ${theme}`}>
      <Hero theme={theme} />
      <FeaturedGames />
      <About />
    </div>
  );
}

export default App;
