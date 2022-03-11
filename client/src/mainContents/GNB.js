
import { Component } from "react";
class GNB extends Component{
    render(){
        return(
            <div className = "gnbContainer">
                <div className = "menuBtn"> 
                    <div className = "line1"></div>
                    <div className = "line2"></div>
                    <div className = "line3"></div>
                </div><div className = "closeMenuBtn"></div>
                <div className = "logo" >Allegro</div>
                <div className = "gnbUser">
                    <ul>
                        <li>로그인</li>
                        <li>my</li>
                        <li>etc</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default GNB;