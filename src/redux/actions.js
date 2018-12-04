/**
 * Created by 梅轩 on 2018/12/3.
 */
import {reqRegister,reqLogin}from '../api';
import {AUTH_SUCCESS,AUTH_ERROR} from './action-types'
//定义同步
export const authSuccess = data => ({type:AUTH_SUCCESS,data});
export const authError = data => ({type:AUTH_ERROR,data});

//定义异步
export const register = ({username, password,rePassword,type}) =>{
  return dispatch =>{
    reqRegister({username,password,type})
      .then(({data})=>{
      //请求成功
        if(data.code === 0){
          //注册成功
          dispatch(authSuccess(data.data))
        }else {
          //注册失败
          dispatch(authError({errMsg:data.msg}))
        }
      })
      .catch(err =>{
        //请求失败
        dispatch(authError({errMsg:'网络不稳定，请刷新试试'}))
      })

  }
}


export const login =({username,password}) =>{
  if(!username){
    return authError({errMsg:'请输入用户名'});
  }else if(!password){
    return authError({errMsg:'请输入密码'});
  }
  return dispatch =>{
    //发送请求
    reqLogin({username,password})
      .then(({data})=>{
      if(data.code === 0){
        //登录成功
        dispatch(authSuccess(data.data))
      }else {
        dispatch(authError({errMsg:data.msg}));
      }
      })
      .catch(err =>{
        dispatch(authError({errMsg:'网络错误'}));
      })
  }
}