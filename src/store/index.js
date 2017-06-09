import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from './reducers';
let enhancedCreateStore = applyMiddleware(thunk,logger)(createStore);
let store = enhancedCreateStore(reducer);
export default  store;
