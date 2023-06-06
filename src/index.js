import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/js/bootstrap.js'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'




// react: { useSuspense: false },


ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)