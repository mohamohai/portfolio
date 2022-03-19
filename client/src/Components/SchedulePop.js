import React, {Component} from 'react';
 
class SchedulePop extends Component {
    render(){
        return(
            
                <div className="full_layer">
                    <div className="common_alert"> 
                       
                        <div>PoP!</div>
                        <div>
                            <button type="button" onClick={this.props.onClose}>close</button>
                        </div>
                    </div>
                </div>
           
        );
    }
}
 
export default SchedulePop;