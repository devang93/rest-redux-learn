import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestDetail from './RestDetail';

export class RestaurantContainer extends Component {
  render() {

    const { restaurants } = this.props;

    let content = '';

        content = restaurants.map((restaurant, index) => 
            <RestDetail key={index} restaurant={restaurant} />
          )
        
    return(
        
          <div className="row">{content}</div>
        
    );
  }
}

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants
    
});

export default connect(mapStateToProps)(RestaurantContainer);