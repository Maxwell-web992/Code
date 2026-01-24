import React from 'react';
import ReactDom from 'react-Dom';
ReactDom.render(<h1>js!</h1>, document.getElementById('root'));
const myelement = <h1>My Score is {8*10}</h1>;
ReactDom.render(myelement, document.getElementById('root'));