import React from 'react';
import styles from './index.css';
import Clock from './components/Clock';
import From from './components/From';
import MouseTracker from './components/MouseTracker';
import Hooks from './components/Hooks';
import Echarts from './components/Echarts';
import {ThemeContext, themes} from './context/theme-context';


const TopTitle = ({name, onClick, toggle}) => {
  if (toggle == undefined) {
    return null
  }
   return (
     <div onClick={onClick} className={styles.top_title}>
        {toggle ? `${name}, it's you`: `未知人访问`}
     </div>
   )
}

class Likes extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      toggle: false,
      arr1: ['ben', 'bob', 'jack', 'lisa', 'smith', 'anwa']
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((state) => {
      return {
        toggle: !state.toggle
      }
    })
  }

  render() {
    let button, arrList;
    button = <button type="button" value="点我点我" style={{backgroundColor: themes.dark.foreground}}>点我点我</button>
    arrList = this.state.arr1.map((item, key) => {
      return <h2 key={key}>{item}</h2>
    })

    // isValidElement方法用于验证是否为React元素，是返回true, 否返回false
    console.log(React.isValidElement(<Clock />), React.isValidElement(arrList))
    return (
      <div>
        <div className={styles.compose}>
          123likes
          <TopTitle name="jack" toggle={this.state.toggle} onClick = {this.handleClick.bind(this)}/>
        </div>
        <Clock message="cool"/>
        {button}
        {arrList}
        <From clock={<Clock message="ben"/>}><p>it's props children</p></From>
        -------------------------------
        <MouseTracker/>
        -------------------------------
        <Hooks/>
        -------------------------------
        <p>vh, vw移动端适配</p>
        <p className={styles.item1}>我是123abc</p>
        -------------------------------
        <Echarts />
      </div>
    )
  }
}
Likes.contextType = ThemeContext

export default Likes