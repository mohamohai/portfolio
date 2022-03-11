import React from 'react';

class User extends React.Component{
    render(){
        return(
            <div>
                
                    {this.props.id} 
                    <img src ={this.props.image}></img>
                    {this.props.name}
                    {this.props.birthday}
                    {this.props.gender} 
                    {this.props.job}
                
           </div>
        );
    }
}


export default User;