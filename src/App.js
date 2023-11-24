import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      items:[
        {
          id: 1,
          title: 'White Chair',
          img: 'chair-white.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'wall-light.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Grey Chair',
          img: 'chair-grey.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          category: 'chairs',
          price: '49.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }
  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({orders:[...this.state.orders, item]})
    }
  }
}

export default App;
