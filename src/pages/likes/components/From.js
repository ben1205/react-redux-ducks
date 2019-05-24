import React from 'react';

class From extends React.Component{
  constructor (props) {
    super(props)
    this.state={
      value: '',
      textareaValue: ''
    }
  }

  handleChange(event) {
    console.log(event.target.type)
    switch(event.target.type){
      case 'textarea':
      this.setState({textareaValue: event.target.value});
      break;
      case 'text':
      this.setState({value: event.target.value.toUpperCase()});
      break;
      default:
      break;
    }
  }


  handleSubmit(event) {
    console.log('提交的名字: ' + this.state.value);
    console.log('提交的介绍: ' + this.state.textareaValue);
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {this.props.clock}
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          介绍:
          <textarea value={this.state.textareaValue} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="提交" />
        {this.props.children}
      </form>
    )
  }
}
export default From