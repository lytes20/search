import React, { Component } from 'react';
import { connect } from 'react-redux';

import { performSearch } from './actions';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleSearch = () => {
      this.props.searchAction(this.state.searchValue);
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        <div>
          {this.props.meals.map((meal, index) => (
            <div key={index}>
              <h1>{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt="meal-thumbnail"/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  meals: state.searchBarReducer.meals,
});

const mapDispatchToProps = dispatch => ({
  searchAction: searchValue => dispatch(performSearch(searchValue)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
