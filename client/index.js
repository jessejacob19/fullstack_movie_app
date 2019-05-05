import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'

document.addEventListener('DOMConetentLoaded', () => {
  ReactDOM.render(
    <App/>,
    // where react should attatch to the DOM
    document.getElementById('app')
  )
})