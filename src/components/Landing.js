import React, { Component } from 'react';
import SearchForm from './SearchForm';
import RestaurantContainer from './RestaurantContainer';
import Spinner from './Spinner';


import { connect } from 'react-redux';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <RestaurantContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.restaurants.loading
});

export default connect(mapStateToProps)(Landing);