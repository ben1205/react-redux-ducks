import React, {useState, useEffect} from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [book, setBook] = useState([{name: 'sexy lady', id: 0}, {name: 'filsh', id: 1}])

  const hadleClick = (e) => {
    // e.preventDefault()
    console.log(count)
    count < book.length - 1 ? setCount(count + 1) : setCount(0);
  }

  useEffect(()=>{
    // 这里类似模拟class组件中的componentDidMount和ccomponentDidUpdate生命周期
    console.log(2333)
    return () => {
      // 返回的回调函数内部模拟class组件中的componentWillUnmount生命周期
      console.log(5555)
    }
  })

  const Choice = (e, id) => {
    e.stopPropagation()
    console.log(id)
  }

  return (
    <div onClick={hadleClick}>
      <p>点击次数：{count}</p>
      <p>
      {
        book.map(({name, id}, key)=> 
          <span key= {key} onClick={Choice.bind(null, event, id)} style={count == id ? {color: 'red'} : {color: '#000'}}>{id}:{name}</span>
        )
      }
      </p>
      </div>
  )
}

export default Hooks