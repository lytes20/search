import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { SearchBar } from './SearchBar';
import { simpleAction } from './actions';

class Search extends Component {
  state = {};
  handleClick = () => {
    this.props.simpleAction();
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.handleClick}>YOYO</button>
        <SearchBar />
        <pre>{JSON.stringify(this.props)}</pre>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
