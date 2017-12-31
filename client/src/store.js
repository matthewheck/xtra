import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/rootReducer'

export const store = createStore(reducer, {}, applyMiddleware(thunk))
