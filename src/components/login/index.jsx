/*
 用户注册的路由组件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { NavBar,Button,WingBlank, WhiteSpace,List,InputItem } from 'antd-mobile';
import Logo from '../logo/logo';

class Login extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }
  state ={
    username:'',
    password:''
  }
  handleChange=(type,value)=>{
    this.setState({
      [type]:value
    })
  }
  goLogin = async() =>{
    //收集表单数据
    const {password,username} = this.state;
    //调用容器组件传递的更新状态的方法
    this.props.login({password,username})
  }
  goRegister= () =>{
    this.props.history.replace('/register');
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
          <Button onClick={this.goRegister}>还没有账户</Button>
        </WingBlank>
      </div>


    )
  }
}
export default Login;