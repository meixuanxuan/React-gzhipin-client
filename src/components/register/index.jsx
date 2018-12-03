/*
 用户注册的路由组件
 */
import React, {Component} from 'react'
import { NavBar,Button,WingBlank, WhiteSpace,List,InputItem,Radio } from 'antd-mobile';
import Logo from '../logo/logo';
const Item = List.Item;
class Register extends Component {
  state = {
    // isBossChecked: true,
    laoban: true,
    username: '',
    password: '',
    rePassword: ''
  }
handleChange=(type,value)=>{
  this.setState({
    [type]:value
  })
}
register = ()=>{
    const {username,password,rePassword,laoban} = this.state;
    console.log(username,password,rePassword,laoban);
    }
gologin= () =>{
  this.props.history.replace('/login');
}

  render() {
    const {laoban} = this.state;
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
          <InputItem onChange={val=>{this.handleChange('rePassword',val)}}>确认密码:</InputItem>
          <WhiteSpace/>
        </List>
          <Item>
            用户类型:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio checked ={!laoban} onChange={this.handleChange.bind(null,'laoban',false)}>大神</Radio>
            <Radio checked ={laoban} onChange={this.handleChange.bind(null,'laoban',true)}>老板</Radio>
          </Item>
          <WhiteSpace/>
          <Button type="primary" onClick={this.register}>注册</Button>
          <WhiteSpace/>
          <Button onClick={this.gologin}>已有账户</Button>
        </WingBlank>
      </div>


    )
  }
}
export default Register;