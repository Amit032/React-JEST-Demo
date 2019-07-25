import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss'

const tempArr = [{
  fName: 'Amit',
  lName: 'Kumar',
  email: 'amit123@gmail.com',
  age: 24,
  onlineSttaus: true,
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
