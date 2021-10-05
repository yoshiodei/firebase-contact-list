import { createStore, applyMiddleware, compose } from 'redux';
import blogReducer from './../reducer/reducer';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import config from './../config/firebaseConfig';


const store = createStore(blogReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(config),
        reactReduxFirebase(config)
    )
    );

export default store;