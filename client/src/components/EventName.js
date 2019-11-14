import React from 'react';
 
class EventName extends React.Component{
  constructor(props){
  super(props)

  this.state = {eventList : ['foire a la saucisse']};
}
  render(){
       return(
      <div class="container">
       <h2>Liste des event</h2>
       {this.state.eventList.map((event) => <p key={event}>{event}</p>)}
      </div>
      );
  }
}
export default EventName;