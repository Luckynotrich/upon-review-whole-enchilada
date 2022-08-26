import React from 'react';
//import { hot } from "react-hot-loader/root";
//import reviewCreator from './components/review-creator.js';

function App() {

  return (
    <div className="App">
    <a href='/create-cat' target="_self">
    <button className='large-left' value="Upon" type='button'>Upon</button>
  </a>
  <a href='/review-creator/'>
    <button className='large-right' value='Review' type='button' >Review</button>
  </a>
    
    </div>
  );
}

export default App;
