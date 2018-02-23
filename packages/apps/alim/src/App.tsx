import * as React from 'react';
import './App.css';
import Tabstrip from '@bentley/wuif-tabstrip';
import Tag from '@bentley/eb-react-components/components/Tag/Tag';
import Document from '@bentley/eb-react-components/components/Document/Document';

const logo = require('./logo.svg');

class App extends React.Component {

  tabs = [
    {
        text: 'Tags',
        content: Tag,
        active: true
    },        
    {
        text: 'Documents',
        content: Document
    }
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Tabstrip tabs={this.tabs}/>
      </div>
    );
  }
}

export default App;
