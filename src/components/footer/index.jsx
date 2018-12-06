import React, {Component} from 'react';
import {TabBar}from 'antd-mobile';
import PropTypes from 'prop-types';
import {withRouter}  from 'react-router-dom'
import './index.less'
const Item = TabBar.Item;
class Footer extends Component {
  static propTypes={
    navList:PropTypes.array.isRequired
  }


  render () {
    //通过redux获取type
    const type = 'laoban';

    const filter = type === 'laoban' ? '/dashen' : '/laoban';
    //过滤掉老板或大神的数据
    const currNavList = this.props.navList.filter(item => filter === item.path ? false : true);
    return (
    <TabBar>
      {
        currNavList.map((item, index) => <Item
          key={index}
          title={item.text}
          icon={<img  src={require(`./nav/${item.icon}.png`)} alt={item.text}/>}
          onPress={this.redirectTo.bind(null, item.path)}
          selected={this.props.location.pathname === item.path}
          selectedIcon={<img  src={require(`./nav/${item.icon}-selected.png`)} alt={item.text}/>}
        /> )
      }
    </TabBar>
    )
  }
}

export default withRouter(Footer);