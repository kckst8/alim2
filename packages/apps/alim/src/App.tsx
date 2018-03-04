import * as React from 'react';
import './App.css';
import Tabstrip from '@bentley/wuif-react-components/components/Tabstrip';
import Tag from '@bentley/eb-react-components/components/Tag';
// import DocumentProps from '@bentley/eb-react-components/components/Document';
import Feature from '@bentley/wuif-react-components/components/Feature';

const logo = require('./logo.svg');

const Document = () => import(/* webpackChunkName: "Document" */ '@bentley/eb-react-components/components/Document');
const Item = () => import(/* webpackChunkName: "Item" */ '@bentley/eb-react-components/components/Item');

class App extends React.Component {

  // TODO type these
  tabs = [
    {
        text: 'Tags',
        content: Tag,
        active: true
    },        
    {
        text: 'Documents',
        content: Feature,
        props: {
          moduleLoader: Document,
          featureProps: {
            text: 'Document!!!'
          }
        }
    },
    {
      text: 'Items',
      content: Feature,
      props: {
        moduleLoader: Item
      }  
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

  // {(this.item) ? <Feature moduleLoader={Item}/> : null}
}

export default App;
