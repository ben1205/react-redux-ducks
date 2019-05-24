import React from 'react';
import List from './List';
import Input from './Input';
import TopImg from './topImg'

class ToDoApp extends React.Component {

  constructor (props) {
    super(props)
    this.myRef = React.createRef();
  }

  onListItemClick = (i) => {
    console.log(i)
    this.props.listItemClick(i)
    // this.setState((previousState) => ({
    //   Lists : [
    //     ...previousState.Lists.slice(0, i),
    //     Object.assign({}, previousState.Lists[i], {done : !previousState.Lists[i].done}),
    //     ...previousState.Lists.slice(i + 1)
    //   ]
    // }))
  }

  onInputSubmit = (event) => {
    console.log(`利用ref操作的dom得到的文本内容是:${this.myRef.current.innerText}`)
    event.preventDefault()
    this.props.inputSubmit()
    // this.setState((previousState)=>({
    //   // Lists: previousState.Lists.push(previousState.inputValue)
    //   Lists : [...previousState.Lists, {item : previousState.inputValue, done : false}],
    //   inputValue : ''
    // }))
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.props.inputChange(event.target.value.toUpperCase())
  };

  onListItemRemove = (i) => {
    this.props.listItemRemove(i)
    // this.setState((previousState) => ({
    //   Lists : [
    //     ...previousState.Lists.slice(0, i),
    //     ...previousState.Lists.slice(i + 1)
    //   ]
    // }))
  }

  // componentWillMount () {
  //   this.setState({
  //     Lists : ['thing1', 'thing2', 'thing3'],
  //     inputValue : 'test'
  //   })
  // }

  componentDidMount () {
    // console.log(this.abb.value = 'ben00000');
  }

  render () {
    console.log(this.props)
    return (
      <div className="row">
        <TopImg />
        <input type="text" defaultValue = '3455' ref={(input) => this.abb = input} name="ben_099"/>
        <div ref={this.myRef}>my Refs</div>
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <Input Value = {this.props.toDoApp.inputValue} onChange = {this.onInputChange} onSubmit = {this.onInputSubmit}/>
              <List listItems = {this.props.toDoApp.Lists} listIntemClick = {this.onListItemClick} listIntemRemove = {this.onListItemRemove}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoApp