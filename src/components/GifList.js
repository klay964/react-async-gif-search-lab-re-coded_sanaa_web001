import React from "react"



class GiftList extends React.component{
  constructor(props){
    super()
   
  }
  
  render(){
   
    return(
      <div>
     {props.gifs}
      </div>)
  }
}

export default GiftList