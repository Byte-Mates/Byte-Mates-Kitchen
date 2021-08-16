import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import AllProducts from "./AllProducts";
import { myCart } from '../store'
import AllUsers from "./AllUsers";
import Cart from "./Cart";


/**
 * COMPONENT
 */



class Home extends Component {
  
  componentDidMount() {
    this.props.loadCartData(this.props.username)
    
   // const myName =  this.props.match.params.id
  //  this.props.loadOrderData(myName)
    
      //      const allOrders2 = this.props.orders
       //     alert('==' + allOrders2.length)
  }


    
    
    
  render() {
    const { username } = this.props;
    const token = window.localStorage.getItem("token");


    return (
      <div>
      <h3>Welcome, {username}</h3>
      <AllUsers />
    <table id="homeTable">
      <tr id = "homeTableFirstRow">
        <td>Knives</td>
        <td>Forks</td>
        <td>Spoons</td>
      </tr>
      <tr>
        <td>
          
          <b>Contact us</b><br />
          <b>Text: XXX-XXX-XXXX</b><br />
          <b>Email:</b> <a href = "">xxx@bytemateskitchen.com</a><br />
          Mon-Fri: 8am-7pm EST<br />
          Sat-Sun: 8am-6pm EST<br />
          
        </td>
        <b>Our Company</b><br />
        About Us<br />
        Careers<br />
        Store Locations and Events<br />
        <td>
        <b>Social Media</b><br />
        Show us your look with:<br />
        #CrateStyle<br />
        #CrateKidsStyle
        </td>
        <td>
  
        </td>
      </tr>
    </table>
    </div>

    );
  };
}


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    order: state.order
  };
};
const mapDispatch = dispatch => {
  return {
    loadCartData(username) {
      dispatch(myCart(username))
    }
  }
}

export default connect(mapState, mapDispatch)(Home);
