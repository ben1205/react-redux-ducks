const initialState = {
  Lists: [{item : 'test', done : false}],
  inputValue: ''
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

const INPUT_CHANGED = 'INPUT_CHANGED';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const LIST_ITEMCLICK = 'LIST_ITEMCLICK';
const LIST_ITEMREMOVE = 'LIST_ITEMREMOVE';

function inputChange(inputValue){
  return {
    type: INPUT_CHANGED,
    value : inputValue
  }
}

function inputSubmit(inputValue){
  return {
    type: INPUT_SUBMIT
  }
}

function listItemClick(index) {
  return {
    type : LIST_ITEMCLICK,
    index : index
  }
}

function listItemRemove(index) {
  return {
    type : LIST_ITEMREMOVE,
    index : index
  }
}

export {
  inputChange,
  inputSubmit,
  listItemClick,
  listItemRemove
}

export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
  switch (action.type){
    case INPUT_CHANGED:
      return Object.assign(
        {},
        state,
        {inputValue: action.value}
      );
    case INPUT_SUBMIT:
      return Object.assign(
        {},
        state,
        {
          // Lists: previousState.Lists.push(previousState.inputValue)
          Lists : [...state.Lists, {item : state.inputValue, done : false}],
          inputValue : ''
        }
      );
    case LIST_ITEMCLICK:
      return Object.assign(
        {},
        state,
        {
          Lists : [
            ...state.Lists.slice(0, action.index),
            Object.assign({}, state.Lists[action.index], {done : !state.Lists[action.index].done}),
            ...state.Lists.slice(action.index + 1)
          ]
        }
      );
    case LIST_ITEMREMOVE:
      return Object.assign(
        {},
        state,
        {
          Lists : [
            ...state.Lists.slice(0, action.index),
            ...state.Lists.slice(action.index + 1)
          ]
        }
      );
    default:
      return state;
    }
}