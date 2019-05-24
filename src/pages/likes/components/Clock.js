import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props)
    this.state = {date : new Date()}
    this.Timedir = ''; // 定义计时器
    // this.tick = this.tick.bind(this)
  }
  componentDidMount (){
    console.log(this.props)
    this.Timedir = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.Timedir)
  }

  tick () {
    this.setState((state, props) => {
      return {
        date: new Date()
      }
    })
  }

  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        <h2>{this.props.message} is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;