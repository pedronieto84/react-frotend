import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,  Routes,
  Route } from "react-router-dom";
import Component2 from './components/Component2'
import Component1 from './components/Component1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />
      <Routes>
      <Route path="/" element={<Component1 />} />
      <Route path="component1" element={<Component1 />} />
      <Route path="component2" element={<Component2 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
