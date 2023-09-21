import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store1 } from './redux/store1';
import App1  from './App1';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// data provide karna padega to store ko pass kardenge as a prop
<BrowserRouter>
{/* hamesha prop pass karte time store ka hee use karenge store={iske andar kuch bhi naam aa sakta hai} */}
<Provider store={store1}>
  <App1/>
</Provider>
<ToastContainer/>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
