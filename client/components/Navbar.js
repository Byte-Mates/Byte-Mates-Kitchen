import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { myCart } from "../store";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "1" };
  }

  myChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { isLoggedIn, username, handleClick, usernameId, user } = this.props;
    console.log("my user:", user);
    return (
      <div id="wholeBar">
        <div id="leftColumn" className="image-with-link-to-main-page">
          <Link to="/home">
            <img src="http://localhost:8080/group.png" id="pic4"></img>
          </Link>
        </div>

        <span id="rightColumn">
          <div id="navTitle">Byte-Mates-Kitchen</div>

          <nav id="navBar">
            <div className="search-bar">
              <input
                type="text"
                id="header-search"
                placeholder="Search product.."
                name="s"
                onChange={this.myChangeHandler}
              />
              <button id="searchButton" type="submit">
                <Link to={`/search/${this.state.searchTerm}`}>Search</Link>
              </button>
            </div>

            <div className="nav-btn" id="all-products">
              <Link to="/products">
                All Products
                <img
                  src="http://localhost:8080/square.png"
                  className="imgNav"
                ></img>
              </Link>
            </div>

            <div className="logged-or-not">
              {isLoggedIn ? (
                <div id="logged-nav">
                  {/* The navbar will show these links after you log in */}
                  <div className="dropdown">
                    <Link to="/home">
                      <button className="nav-btn">Home</button>
                    </Link>

                    <div className="dropdown-content">
                      <Link to={`/users/${usernameId}`}>Profile details</Link>

                      <Link to={`/history/${username}`}>Past Orders</Link>

                      <Link to={`/wishlist/${username}`}>Wishlist</Link>
                    </div>
                  </div>

                  <Link className="nav-btn" to={`/cart/${username}`}>
                    Cart
                    <img
                      src="http://localhost:8080/cart.png"
                      className="imgNav"
                    ></img>
                  </Link>

                  {user.isAdmin ? (
                    <div className="dropdown">
                      <button className="nav-btn">Admin settings</button>

                      <div className="dropdown-content">
                        <Link to={"/users"}>All User Profiles (Admin)</Link>

                        <Link to={"/adminproducts"}>All Products (Admin)</Link>
                      </div>
                    </div>
                  ) : null}

                  <a className="nav-btn" onClick={handleClick}>
                    Logout
                    <img src="admin.png" className="imgNav"></img>
                  </a>
                </div>
              ) : (
                <div id="unlogged-nav">
                  {/* The navbar will show these links before you log in */}
                  <div className="nav-btn" id="all-products">
                    <Link to="/login">
                      Sign In / Track Order
                      <img
                        src="http://localhost:8080/admin.png"
                        className="imgNav"
                      ></img>
                    </Link>
                  </div>

                  <div className="nav-btn" id="all-products">
                    <Link to="/signup">
                      Sign Up
                      <img src="/arrow.png" className="imgNav"></img>
                    </Link>
                  </div>

                  {/*   <div className="nav-btn">
                    <Link to="/wishlist">
                      Wishlist
                      <img src="/heart.png" className="imgNav"></img>
                    </Link>
                  </div>     */}

                  <div className="nav-btn">
                    <Link to="/cart">
                      Cart
                      <img src="/cart.png" className="imgNav"></img>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </span>
        <hr />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
    order: state.order,
    usernameId: state.auth.id,
    user: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
