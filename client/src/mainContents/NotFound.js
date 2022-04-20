import { Component } from "react";
import hero from "./found.gif";
import "./NotFound.css";

class NotFound extends Component{
    render(){
        return(
            <div className="notFoundDiv">
                
                <img className="notFound" src={hero}/>
               
            
            </div>
        );
    }
}
export default NotFound