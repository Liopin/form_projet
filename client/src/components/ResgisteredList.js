import React from 'react';



class ResgisteredList extends React.Component{
constructor(props){
super(props);
this.state = {userList : ['Lionel','Romain','Mickael']};
}
    render(){
       return(
           <div>
             <h1>Liste de personne</h1>
             {this.state.userList.map((user) => <p key={user}>{user}</p>)}
           </div>
       );
    }
}

export default ResgisteredList;