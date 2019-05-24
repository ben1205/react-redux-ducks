import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img src={require('../../../asset/images/123.jpg')} alt="" style={{position:'absolute', left:mouse.x, top:mouse.y, width:'20px', height:'20px'}}/>
    )
  }
}

class Mouse extends React.Component {
  constructor (props) {
    super(props);
    this.state = {x: 0, y: 0};
  }

  handleMouseMove (event) {
    // console.log(event)
    this.setState({
      x: event.movementX,
      y: event.movementY
    })
  }

  render () {
    return (
      <div style={{ height: '50px' , position: 'relative'}} onMouseMove={(e) => this.handleMouseMove(e)}>
        {/* {this.props.render(this.state)} */ this.props.children(this.state)}
      </div>
    )
  }
}

class MouseTracker extends React.Component{
  render () {
    return (
      <div>
        <h1>移动鼠标!</h1>
        {/* <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/> */}
        <Mouse>
          {mouse => <Cat mouse={mouse}/>}
        </Mouse>
      </div>
    )
  }
}

export default MouseTracker;