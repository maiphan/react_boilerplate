// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';


useStrict(true);

ReactDOM.render(
  <div>
    Hello
  </div>,
  (document.getElementById('root'): any),
);
