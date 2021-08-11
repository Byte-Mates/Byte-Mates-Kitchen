import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { username } = props;
  const token = window.localStorage.getItem("token");

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
