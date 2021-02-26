import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const phonebook = [
  { name: 'Gourav',
    id : 1 ,
    number : '9729804470' 
  },
  { name: 'Pranav',
    id : 2 ,
    number : '9729804800'
  },
  { name: 'Anirudh',
    id : 3 ,
    number : '9729804000' 
  },
  { name: 'Anchit',
    id : 4 ,
    number : '9729802828' 
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App phonebook={phonebook} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
