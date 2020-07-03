import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestDetail from './RestDetail';
import { filter } from 'async';

const filterRestaurants = (restaurants, name) => {
  return restaurants.filter((res) => res.name.toLowerCase().includes(name))
}


export class RestaurantContainer extends Component {
  render() {

    const { restaurants, text, name } = this.props;
    console.log(this.props)
    console.log("From Container")
    console.log(restaurants)
    console.log(text)
    console.log(name)

    let filtered = filterRestaurants(restaurants, name)
    console.log(filtered)

    let content = '';

        content = filtered.map((restaurant, index) => 
            <RestDetail key={index} restaurant={restaurant} />
          )
        
    return(
        
          <div className="row">{content}</div>
        
    );
  }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants,
    text: state.restaurants.text,
    name: state.restaurants.name
});

export default connect(mapStateToProps)(RestaurantContainer);