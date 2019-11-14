import React from 'react';
 
class Resgistered extends React.Component{
  constructor(props){
  super(props)

  this.state = {
    name: 'Foire saucisse'
  }
}
handleSubmit(e){
   e.preventDefault()
   console.log('clicked')
 }

  render(){
       return(
      <div class="container">
       <h2>Inscription</h2>
       <form>
         <label for="exampleInputEmail1">FirstName :</label>
         <input type="text" className="form-control" placeholder="Enter your name"/>
         <label for="exampleInputEmail1">LastName :</label>
         <input type="text" className="form-control" placeholder="Enter your lastname"/>
         <label for="exampleInputEmail1">Name :</label>
         <input type="text" className="form-control" placeholder="birthday"/>
         <label for="exampleInputEmail1">Name :</label>
         <input type="text" className="form-control" placeholder="Passion"/>
         <button type="submit" className="btn btn-primary" onClick={(e) =>this.handleSubmit(e)}>Submit</button>
       </form>
      </div>
      );
  }
}
export default Resgistered;