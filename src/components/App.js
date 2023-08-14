import '../App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Link } from "react-router-dom";
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    } else {
      return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/commentlist">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  
  render() {
  return (
    <div>
      {this.renderHeader()}

      <div>
        <p>text here</p>
      </div>
      <Routes>
        <Route path='/' element={<CommentList />} />
        <Route path='/commentlist' element= {<CommentBox />} />
      </Routes>
    </div>
  );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);