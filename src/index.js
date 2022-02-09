import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Checkout from './containers/Checkout/Checkout';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       {/* <Route path='/checkout' element={<Checkout />} /> */}
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
