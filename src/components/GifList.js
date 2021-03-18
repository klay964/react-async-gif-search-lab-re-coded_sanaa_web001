import React from "react"



class GiftList extends React.component{
  constructor(props){
    super()
   
  }
  
  render(){
   
    return(
      <div>
     {props.gifs.map(gif)}
      </div>)
  }
}

export default GiftList