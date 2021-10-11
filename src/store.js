import { createStore } from "redux";
import reducersInit from './redusers.js'


let store = createStore(reducersInit);

export default store;