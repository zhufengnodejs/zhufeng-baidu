import * as actionTypes from '../action-types';
export default function(state={words:[]},action){
  switch(action.type){
      case actionTypes.FETCH_SUGGEST_SUCCESS:
        return {words:action.words}
      default:
          return state;
  }
}