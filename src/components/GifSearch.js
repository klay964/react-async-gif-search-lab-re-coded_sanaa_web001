import React from "react"



class GiftSearch extends React.component{
  constructor(props){
    super()
    state={
      query:""
    }
   
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }
  render(){
   
    return(
      <div>
    
      </div>
      )
  }
}

export default GiftSearch