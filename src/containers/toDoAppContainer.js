import { connect } from 'react-redux';
import ToDoApp from '../component/ToDoApp.js';
import {inputChange,
        inputSubmit,
        listItemClick,
        listItemRemove
        } from '../redux/modules/toDoApp';

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(inputChange(value)),
    inputSubmit: () => dispatch(inputSubmit()),
    listItemClick: (index) => dispatch(listItemClick(index)),
    listItemRemove: (index) => dispatch(listItemRemove(index))
  }; // here we'll soon be mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);