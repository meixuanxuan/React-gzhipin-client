/*
 用户注册的路由组件
 */
import React, {Component} from 'react'
import { NavBar,Button,WingBlank, WhiteSpace,List,InputItem } from 'antd-mobile';
import Logo from '../logo/logo';

class Login extends Component {

  handleChange=(type,value)=>{
    this.setState({
      [type]:value
    })
  }
  register = ()=>{
    this.props.history.replace('/register');
  }
  gologin= () =>{
    this.props.history.replace('/login');
  }

  render() {

    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={val=>{this.handleChange('username',val)}}>用户名:</InputItem>
            <WhiteSpace/>
            <InputItem onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace/>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.gologin}>登录</Button>
          <WhiteSpace/>
          <Button onClick={this.register}>还没有账户</Button>
        </WingBlank>
      </div>


    )
  }
}
export default Login;