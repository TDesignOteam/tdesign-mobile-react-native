import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../style/mobile/index.less';

// TODO FIX
// import '../../src/_common/style/mobile/_reset.less';
// import '../../src/_common/style/mobile/index.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
