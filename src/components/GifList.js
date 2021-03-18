import React from "react"



class GiftList extends React.component{
  constructor(props){
    super()
   
  }
  
  render(){
   
    return(
      <div>
     {props.gi}
      </div>)
  }
}

export default GiftList