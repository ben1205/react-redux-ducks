import React from 'react';
import List from './List';
import Input from './Input';

class ToDoApp extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     Lists : [
  //       {
  //         item : 'thing1',
  //         done : false
  //       },
  //       {
  //         item : 'thing2',
  //         done : false
  //       },
  //       {
  //         item : 'thing3',
  //         done : false
  //       }
  //     ],
  //     inputValue : 'test'
  //   }
  // }

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
    this.props.inputChange(event.target.value)
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

  render () {
    console.log(this.props)
    return (
      <div className="row">
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