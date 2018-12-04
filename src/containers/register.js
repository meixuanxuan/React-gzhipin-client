/**
 * Created by 梅轩 on 2018/12/4.
 */
import {connect} from 'react-redux';
//引入UI组件
import Register from '../components/register';
//引入 actions creators
import {register} from '../redux/actions'

//暴露容器组件
export default connect(
  state =>({user:state.user}),
  {register}
)(Register)