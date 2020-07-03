import React, { Component } from 'react';
import {searchCity, fetchRestaurants,filterRest} from '../actions/searchActions';

import { connect } from 'react-redux';


export class SearchForm extends Component {

    onChange = e => {
      this.props.searchCity(e.target.value);
      
    };

    onSubmit = e => {
    e.preventDefault();
    this.props.fetchRestaurants(this.props.text);
    
    }
    

    render() {
      return (
        <div>
          <div className="container">
              <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Refine by..."
              onChange={(e)=>this.props.filterRest(this.props.restaurants,e.target.value)}
            />
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="form-control"
                name="searchText"
                placeholder="Enter City..."
                onChange={this.onChange}
              />
              
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    text: state.restaurants.text,
    restaurants:state.restaurants.items,
    name: state.restaurants.name,
    restaurants:state.restaurants.filteredRest,
  });

  export default connect(mapStateToProps,{searchCity,fetchRestaurants,filterRest})(SearchForm);