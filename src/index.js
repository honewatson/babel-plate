let React = require('react');
let ReactDOM = require('react-dom');
(() => {
  console.log('Runner runner');
  const root = document.getElementById('root');

  ReactDOM.render(<h1 style={ {textAlign: 'center'} }>{'Go React!'}</h1>, root);
})();
