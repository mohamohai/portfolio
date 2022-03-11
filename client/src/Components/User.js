import React from 'react';
import { Table } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
class User extends React.Component{
    render(){
        return(
            <div>
                <Table>
                    <TableCell>{this.props.id} </TableCell>
                    <TableCell><img src ={this.props.image}></img></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender} </TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </Table> 
           </div>
        );
    }
}


export default User;