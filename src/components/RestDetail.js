import React, { Component } from 'react';


export class RestDetail extends Component {
  render() {
    const { restaurant } = this.props;
    return (
        <div className="searchContainer">
        
        <div className="rest_info"> 
                        <p className="rest-key">Restaurant: 
                        <span className="rest-value"> {restaurant.name}</span>
                        </p>
                    
                    
                        <p className="rest-key">Address:
                        <span className="rest-value"> {restaurant.address}</span>
                        </p>

                        <p className="rest-key">Arae: 
                        <span className="rest-value"> {restaurant.area}</span>
                        </p>
                    
                        <p className="rest-key">Price: 
                        <span className="rest-value"> {restaurant.price}</span>
                        </p>
        </div>
        </div>
      
    );
  }
}

export default RestDetail;