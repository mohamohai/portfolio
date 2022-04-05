
import { Component, useEffect } from "react";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import '../mainCss/gnbContainer.css';
import React,{useState} from 'react';



class GNB extends Component{

    render(){
        const isOpen = true;
        const Header = () => {
            const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
            
            const toggleMenu = () => {
                  setMenu(isOpen => !isOpen); // on,off 개념 boolean
              }
        }
          
        return(
            <div className = "gnbContainer">
                <div className = "menuBtn"> 
                    <div className = "line1"></div>
                    <div className = "line2"></div>
                    <div className = "line3"></div>
                </div><div className = "closeMenuBtn"></div>
                <div className = "logo" ><Link to ="/">Allegro</Link></div>
                <div className = "gnbUser"><li ></li> 
                    <ul> 
                        <li><Link to ="SignIn">로그인</Link></li>
                        <li>my</li>
                        <li>etc</li>
                    </ul>
                    <input type="button" onClick={toggleMenu()} ></input>
                    <div className={isOpen ? "show" : "hide"}></div>
                </div>
            </div>
        );
    }
}
export default GNB;