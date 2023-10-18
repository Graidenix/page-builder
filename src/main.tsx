import React from 'react'
import ReactDOM from 'react-dom/client'
import {defaultComponents} from './componentsLib.ts';
import App from './App.tsx';
import './styles/index.css';
console.log(defaultComponents);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
