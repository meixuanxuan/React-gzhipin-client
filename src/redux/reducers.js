/**
 * Created by 梅轩 on 2018/12/3.
 */
/*
 包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'
import {AUTH_SUCCESS,AUTH_ERROR} from './action-types'
const initUserState = {
  username:'',
  type:'',
  _id:'',
  errMsg:'',
  redirectTo: '',
  header: '',
  post: '',
  salary: '',
  info: '',
  company: ''
}
function user(previousState = initUserState, action) {
  switch (action.type){
    case AUTH_SUCCESS:
      return {...action.data, redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case AUTH_ERROR:
      return {...initUserState,...action.data};
    default:
    return previousState;
  }
}

const initYyyState = {};
function yyy(previousState = initYyyState, action) {
  switch (action.type) {
    default :
      return previousState;
  }
}

function getRedirectPath(type, header) {
  let path = '';

  if (type === 'laoban') {
    path = '/laoban';
  } else {
    path = '/dashen';
  }

  if (!header) {
    path += 'info';
  }

  return path;
}

// 返回合并后的reducer函数
export default combineReducers({
  user
})
