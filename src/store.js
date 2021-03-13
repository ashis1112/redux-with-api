import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './reducers/rootreducer'

const initialstate={}
const middleware=[thunk]

const store=createStore(rootreducer,initialstate,applyMiddleware(...middleware))


export default store