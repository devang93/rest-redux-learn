import {SEARCH_CITY, FETCH_RESTAURANTS ,FILTER_RESTAURANTS } from '../actions/types';

const initialState = {
  text: '',
  restaurants: [],
  filteredRest:[],
  name:''
};

export default function(state = initialState, action){
    switch (action.type) {
        case SEARCH_CITY:
        return {
        ...state,
        text: action.payload
    };
    case FETCH_RESTAURANTS:
      return {
        ...state,
        text: action.text,
        restaurants: action.payload,
        filteredRest: action.payload
      };
    case FILTER_RESTAURANTS:
      return {
        ...state,
        name: action.payload.name
      };

    default:
      return state;
}
};

