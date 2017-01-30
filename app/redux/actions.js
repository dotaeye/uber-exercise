import * as actionTypes from './actionTypes';

export const expandSearchHeader = () => {
  return {
    type: actionTypes.EXPAND_SEARCH_HEADER
  };
};

export const collapseSearchHeader = () => {
  return {
    type: actionTypes.COLLAPSE_SEARCH_HEADER
  };
};

