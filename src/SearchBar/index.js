import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import { simpleAction } from './actions';

class Search extends Component {
  state = {};
  handleClick = () => {
    this.props.simpleAction();
  };
  render() {
    return (
      <Fragment>
        <SearchBar />
      </Fragment>
    );
  }
}


export default Search;
