/**
 * Created by 梅轩 on 2018/12/3.
 */
/*
 redux最核心的store对象模块
 */

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))