import {SEARCH_CITY, FETCH_RESTAURANTS ,FILTER_RRSTAURANT } from '../actions/types';

const initialState = {
  text: '',
  restaurants: [],
  loading: false,
  filteredRest:[],
  name:'',
  
};

export default function(state = initialState, action){
    switch (action.type) {
        case SEARCH_CITY:
        return {
        ...state,
        text: action.payload,
        loading: false
    };
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        filteredRest: action.payload,
        loading: false
      };
    case FILTER_RRSTAURANT:
      return {
        ...state,
        filteredRest: action.payload.items,
        name: action.payload.name,
        loading: false
      };

    default:
      return state;
}
};

