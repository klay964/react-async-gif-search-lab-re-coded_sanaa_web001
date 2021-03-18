import React from "react"



class GiftSearch extends React.component{
  constructor(props){
    super()
    state={
      query:""
    }
   
  }
  
  handleChange=(e)=>{
  this.setState({query: event.target.value})
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }
  render(){
   
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={handleChange} />
        </form>
    
      </div>
      )
  }
}

export default GiftSearch