import React, { Component } from 'react';
import LineItemTable from './LineItemTable.js';
import AddItemButtons from './AddItemButtons.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          amount: '',
          description: '',
          quantity: '',
          type: 'item'
        }
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  addItem(item) {
    const { items } = this.state
    const itemWithTax = Object.assign({}, item)
    const newItems = items.concat([itemWithTax])
    const normalItems = newItems.filter(x => x.type === "item")
    const discounts = newItems.filter(x => x.type === "discount")
    const serviceCharges = newItems.filter(x => x.type === "serviceCharge")
    const sortedItems = [normalItems, discounts, serviceCharges].flat()

    if (item.type === "serviceCharge") {
      this.setState({ items: sortedItems })
    } else {
      this.setState({ items: sortedItems })
    }
  }

  updateItem(targetIndex, name, value) {
    const newItems = this.state.items.map((item, index) => {
      if (index === targetIndex) {
        let changes = {}
        changes[name] = value
        return Object.assign({}, item, changes)
      } else {
        return item
      }
    })
    this.setState({ items: newItems,})
  }

  render() {
    const { items } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <h1>Table</h1>
        </div>
        <div className='row'>
          <LineItemTable 
            items={items}
            updateItem={this.updateItem}
          />
        </div>
        <div>
          <AddItemButtons
            addItem={this.addItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
