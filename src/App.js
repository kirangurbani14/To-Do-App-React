import logo from './icon1.jpg';
import './App.css';
import React from 'react';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
library.add(faTrash);
library.add(faPlusCircle);


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

handleInput(e){
  this.setState({
    currentItem:{
    text: e.target.value,
    key: Date.now()
    }
  })
}

addItem(e){
  e.preventDefault();
  const newItem = this.state.currentItem;
  console.log(newItem); 
  if(newItem.text!==""){
    const newItems = [...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:'',
        completed: false
      }
    })
  }
}


deleteItem(key){
      const filteredItems = this.state.items.filter(item => item.key!==key);
      this.setState({
        items: filteredItems
      })
}

handleClick = (e) => {
  e.target.className.toggle("strikeThrough")
}

  render(){
  return (
    <div>
      <img src={logo} width="70" height="70" className="logo"/>
      <h2 className="app-title">TO DO APP</h2>
      <div className="App">
      <h3>ADD AN ITEM</h3>
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter todo item"
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>

          
          <button type="submit">ADD ITEM</button>
        </form>
      </header>
      <ListItems items={this.state.items} 
      handleClick={this.handleClick}
      deleteItem = {this.deleteItem}>  
      </ListItems>
      </div>
   </div>
  );
}}


export default App;
