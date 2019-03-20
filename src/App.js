import React, { Component } from 'react';
import './App.css';

const MENU_DATA = [
  {
    name: 'Buffalo wings',
    description: 'Comes from chicken, not buffalo.',
    type: 'appetizer',
  },
  {
    name: 'Tuna tower',
    description: 'Raw tuna and avacado, in tower form.',
    type: 'appetizer',
  },
  {
    name: 'Salmon with potatoes',
    description: 'Fresh fish and some roasted potatoes.',
    type: 'entree',
  },
  {
    name: 'Chef salad',
    description: 'Healthy and delicious.',
    type: 'entree',
  },
  {
    name: 'Ribeye Steak',
    description: 'The best steak in town.',
    type: 'entree',
  },
  {
    name: 'Coffee Ice Cream',
    description: 'Sweet, cold, bold!',
    type: 'dessert',
  },
  {
    name: 'Apple Pie',
    description: 'Like your momma use to make!',
    type: 'dessert',
  },
]

class MenuViewer extends Component {
  constructor(props){
    super(props)
    // can/should be done in componentDidMount if using loader and pretending to fetch data from BE
    // but this is fine for quick and dirty
    const menu = this.createMenu(MENU_DATA)
    this.state = {
      menu,
      currentTab: Object.keys(menu)[0]
    }
  }

  createMenu = (data) => {
    const menu = {}
    data.forEach((item) => {
      if (!menu[item.type]) {
        menu[item.type] = [item]
      } else {
        menu[item.type].push(item)
      }
    })
    return menu
  }

  render() {
    const { currentTab, menu } = this.state
    const tabs = Object.keys(menu)
    const items = menu[currentTab]
    return (
      <div className='app'>
        <div className='tab-viewer'>
          <h3>Swoop Cafe Menu</h3>
          <ul className='tabs'>
            {tabs.map(tab => (
              <li
                key={tab}
                className={`tab ${currentTab === tab ? 'active' : ''}`}
                onClick={() => this.setState({currentTab: tab})}
              >
                {tab}
              </li>
            ))}
          </ul>
          <ul className='items'>
            {items.map(item => (
              <li
                key={item.name}
                className='item'
              >
                <span className='name'>{item.name}</span>
                <span className='description'>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    )
  }
}

export default MenuViewer
