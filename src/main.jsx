import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connect4 from './pages/Connect4.jsx';
import MemoryLane from './pages/MemoryLane.jsx';
import TikTakToe from './pages/TikTakToe.jsx';
import Trivia from './pages/Trivia.jsx';
import Root from './pages/Root.jsx';
import Error from './pages/Error.jsx';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {path: '/', element: <App /> },
      {path: '/connect4', element: <Connect4 />},
      {path: '/memorylane', element: <MemoryLane />},
      {path: '/tiktaktoe', element: <TikTakToe />},
      {path: '/trivia', element: <Trivia />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap the RouterProvider with ThemeProvider */}
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
);
