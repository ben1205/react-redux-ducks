import React from 'react'

const List = (props) => {

  const list = props.listItems.map((el, i) => {
    return  <li key={i}>
              <span
                style={
                  el.done
                  ? {textDecoration: 'line-through', fontSize: '20px'}
                  : {textDecoration: 'none', fontSize: '20px'}
                }
                onClick={() => props.listIntemClick(i)}
              >{el.item}</span>
              <button className="btn btn-danger pull-right" onClick={() => props.listIntemRemove(i)}>
                x
              </button>
            </li>
  })

  return (
    <div>
      <ul>
        {
          list
        }
      </ul>
    </div>
  )
}

export default List