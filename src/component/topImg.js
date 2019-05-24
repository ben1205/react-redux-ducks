import React from 'react';
// const imgUrl = require("../asset/images/123.jpg")

const TopImg = (props) => {
  return (
    // <p style={{backgroundColor:'red'}}>123</p>
    <React.Fragment>
      <img src={require("../asset/images/123.jpg")} alt="" style={{width:'300px',height:'200px'}}/>
      {/* React.createElement('img', {src: require("../asset/images/123.jpg"), style : {width:'300px',height:'200px'}}, null) */}
    </React.Fragment>
  )
}

export default TopImg