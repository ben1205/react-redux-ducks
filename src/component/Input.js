import React from 'react';

const Input = ({Value, onChange, onSubmit}) => {
  return (
    <form>
      <div
        className="form-group">
        <label
          htmlFor="listInput">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="listItemInput"
          placeholder="Add new todo"
          onChange= {onChange}
        />
        <button className="btn btn-primary" onClick={onSubmit}>
          Add Item
        </button>
      </div>
    </form>
  )
}

export default Input