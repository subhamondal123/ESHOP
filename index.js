import {createStore, combineReducers} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import cartReducers from './reducers/cartReducers';
import productReducers from "./reducers/productReducers";
const root = combineReducers({
    productReducers,cartReducers
})
const store = createStore(root,devToolsEnhancer());
export default store;