import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// helps with debugging.  there's a browser extension that makes it very nice
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(reducer, composeEnhancers());

export default store;
