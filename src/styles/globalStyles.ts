import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #e50914;
    --secondary-color: #564d4d;
    --accent-color: #b81d24;
    --background-color: #141414;
    --secondary-background: #181818;
    --card-background: #222222;
    --card-hover-background: #333333;
    --text-color: #ffffff;
    --text-secondary: #b3b3b3;
    --text-muted: #777777;
    --danger-color: #e50914;
    --success-color: #46d369;
    --warning-color: #f9a825;
    --info-color: #0080ff;
    --shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    --border-radius: 4px;
    --transition: all 0.3s ease;
    --netflix-gradient: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-color);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    font-size: 0.9rem;
    font-weight: 500;
    
    &:hover {
      background: var(--accent-color);
      transform: scale(1.05);
    }
    
    &:disabled {
      background: #666;
      cursor: not-allowed;
      transform: none;
    }
  }

  input, textarea, select {
    padding: 0.5rem;
    border: 1px solid #333;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
    width: 100%;
    background-color: #333;
    color: var(--text-color);
    
    &:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 2px rgba(184, 29, 36, 0.2);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .highlight {
    background-color: rgba(229, 9, 20, 0.3);
    padding: 0 2px;
    border-radius: 2px;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`;

export default GlobalStyle; 