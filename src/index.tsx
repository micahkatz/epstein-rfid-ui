import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {

//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <Route path="/app" element={<App />} />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// } else {
//   root.render(
//     <React.StrictMode>
//       <HashRouter>
//         <Route path="/app" element={<App />} />
//       </HashRouter>
//     </React.StrictMode>
//   );

// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();