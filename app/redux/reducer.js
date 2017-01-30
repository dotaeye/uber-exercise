import * as actionTypes from './actionTypes';
import { Keyboard } from 'react-native';

const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco'},
    {id: 1, icon: 'recent', title: 'Zynga HQ', subtitle: '699 8th St, San Francisco'},
    {id: 2, icon: 'recent', title: 'Facebook HQ', subtitle: '888 Brannan St, San Francisco, CA'},
    {id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA'},
    {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
  ],
  locationSearchHeader: {
    collapsed: true
  }
};

export default reducer = (state = initialState, action) => {

  const reducers = {

    [actionTypes.EXPAND_SEARCH_HEADER]: () => {
      return Object.assign({}, state, {
        locationSearchHeader: Object.assign({}, state.locationSearchHeader, {
          collapsed: false,
        })
      });
    },

    [actionTypes.COLLAPSE_SEARCH_HEADER]: () => {
      Keyboard.dismiss();
      return Object.assign({}, state, {
        locationSearchHeader: Object.assign({}, state.locationSearchHeader, {
          collapsed: true,
        })
      });
    },

  };

  if(typeof reducers[action.type] === 'function') {
    return reducers[action.type]();
  } else {
    return state;
  }

};